import React, { useEffect } from 'react'
import { Container } from 'reactstrap'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import { makeStyles, createStyles, Backdrop, CircularProgress, Theme} from '@material-ui/core';
import { usePostCommentMutation, useGetCommentLazyQuery } from '../graphql/autogenerate/hooks'
import { useAuth } from '../hooks/use-auth';

const loadingStyles = makeStyles((theme: Theme) =>
  createStyles({
      backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
      },
  }),
);


export default function Comments(contributionId : any) {
    const { state }: any = useAuth()
    const userId: any =
        state.customClaims.claims['https://hasura.io/jwt/claims'][
        'x-hasura-user-id'
    ]
    const [textComment, setTextComment] = React.useState('')
    const customStyle = loadingStyles()
    const changeTextComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTextComment(event.target.value);
    }
    const [getCommentQuery, { data, loading, error }] = useGetCommentLazyQuery({
        fetchPolicy: 'network-only',
        variables: {
            contributionId: contributionId
        },
    })
    const [postComment] = usePostCommentMutation({
        variables: {
            object: {
                createBy: userId,
                content: textComment.trim(),
                contributionId: contributionId
            },
        }
    })
    useEffect(() => {
        getCommentQuery()
    }, [])

    if (loading) return (
        <Backdrop className={customStyle.backdrop} open={loading}>
            <CircularProgress color="inherit"/>
        </Backdrop>
    )
    if (error) return <div> Error at Comment component {console.log(error)}</div>
    
    const commentArr = data && data.comments

    const handlePostComment = async (e: React.MouseEvent<unknown>) => {
        if (textComment.trim() != '') {
            await postComment()
            e.preventDefault();
            setTextComment('')
            getCommentQuery()
            
        }
    }

    return (
        <Container style={{ backgroundColor: 'white' }}>
            <Comment.Group >
                <Header as='h2' dividing>
                    Comments
                </Header>
                <div style={{overflowY:'scroll', maxHeight:'300px'}}>
                    {(commentArr) ? commentArr.map((el: any, i: any) => {
                        return <Comment key={i}>
                            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                            <Comment.Content>
                                <Comment.Author as='a'>{el.user?.fullName}</Comment.Author>
                                <Comment.Metadata>
                                    <div>Today at 5:42PM</div>
                                </Comment.Metadata>
                                <Comment.Text>{el.content}</Comment.Text>
                            </Comment.Content>
                        </Comment>
                    }): null}
                </div>
                <Form reply>
                    <Form.TextArea onChange={event => changeTextComment(event)} value={textComment} />
                    <Button content='Post' labelPosition='left' icon='edit' primary onClick={(e) => handlePostComment(e)} />
                </Form>
            </Comment.Group>
        </Container>
    )
}
