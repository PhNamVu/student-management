import React, { useEffect, useReducer } from 'react'
import { Container } from 'reactstrap'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

import { usePostCommentMutation, useGetCommentLazyQuery } from '../graphql/autogenerate/hooks'


type Props = {
    userId: string,
    contributionId: string
}

export default function Comments({ userId, contributionId }: Props) {
    const [textComment, setTextComment] = React.useState('')
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

    const commentArr = data && data.comments
    console.log(commentArr)

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
