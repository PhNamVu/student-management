export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  jsonb: any
  numeric: any
  timestamp: any
  uuid: any
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** columns and relationships of "comments" */
export type Comments = {
  __typename?: 'comments'
  content?: Maybe<Scalars['String']>
  /** An object relationship */
  contribution?: Maybe<Contributions>
  contributionId?: Maybe<Scalars['uuid']>
  createAt?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  id: Scalars['uuid']
  /** An object relationship */
  user?: Maybe<Users>
}

/** aggregated selection of "comments" */
export type Comments_Aggregate = {
  __typename?: 'comments_aggregate'
  aggregate?: Maybe<Comments_Aggregate_Fields>
  nodes: Array<Comments>
}

/** aggregate fields of "comments" */
export type Comments_Aggregate_Fields = {
  __typename?: 'comments_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Comments_Max_Fields>
  min?: Maybe<Comments_Min_Fields>
}

/** aggregate fields of "comments" */
export type Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Comments_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "comments" */
export type Comments_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Comments_Max_Order_By>
  min?: Maybe<Comments_Min_Order_By>
}

/** input type for inserting array relation for remote table "comments" */
export type Comments_Arr_Rel_Insert_Input = {
  data: Array<Comments_Insert_Input>
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** Boolean expression to filter rows from the table "comments". All fields are combined with a logical 'AND'. */
export type Comments_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Comments_Bool_Exp>>>
  _not?: Maybe<Comments_Bool_Exp>
  _or?: Maybe<Array<Maybe<Comments_Bool_Exp>>>
  content?: Maybe<String_Comparison_Exp>
  contribution?: Maybe<Contributions_Bool_Exp>
  contributionId?: Maybe<Uuid_Comparison_Exp>
  createAt?: Maybe<Timestamp_Comparison_Exp>
  createBy?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "comments" */
export enum Comments_Constraint {
  /** unique or primary key constraint */
  CommentsPkey = 'comments_pkey',
}

/** input type for inserting data into table "comments" */
export type Comments_Insert_Input = {
  content?: Maybe<Scalars['String']>
  contribution?: Maybe<Contributions_Obj_Rel_Insert_Input>
  contributionId?: Maybe<Scalars['uuid']>
  createAt?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Comments_Max_Fields = {
  __typename?: 'comments_max_fields'
  content?: Maybe<Scalars['String']>
  contributionId?: Maybe<Scalars['uuid']>
  createAt?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
}

/** order by max() on columns of table "comments" */
export type Comments_Max_Order_By = {
  content?: Maybe<Order_By>
  contributionId?: Maybe<Order_By>
  createAt?: Maybe<Order_By>
  createBy?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Comments_Min_Fields = {
  __typename?: 'comments_min_fields'
  content?: Maybe<Scalars['String']>
  contributionId?: Maybe<Scalars['uuid']>
  createAt?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
}

/** order by min() on columns of table "comments" */
export type Comments_Min_Order_By = {
  content?: Maybe<Order_By>
  contributionId?: Maybe<Order_By>
  createAt?: Maybe<Order_By>
  createBy?: Maybe<Order_By>
  id?: Maybe<Order_By>
}

/** response of any mutation on the table "comments" */
export type Comments_Mutation_Response = {
  __typename?: 'comments_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Comments>
}

/** input type for inserting object relation for remote table "comments" */
export type Comments_Obj_Rel_Insert_Input = {
  data: Comments_Insert_Input
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** on conflict condition type for table "comments" */
export type Comments_On_Conflict = {
  constraint: Comments_Constraint
  update_columns: Array<Comments_Update_Column>
  where?: Maybe<Comments_Bool_Exp>
}

/** ordering options when selecting data from "comments" */
export type Comments_Order_By = {
  content?: Maybe<Order_By>
  contribution?: Maybe<Contributions_Order_By>
  contributionId?: Maybe<Order_By>
  createAt?: Maybe<Order_By>
  createBy?: Maybe<Order_By>
  id?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: "comments" */
export type Comments_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "comments" */
export enum Comments_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  ContributionId = 'contributionId',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  CreateBy = 'createBy',
  /** column name */
  Id = 'id',
}

/** input type for updating data in table "comments" */
export type Comments_Set_Input = {
  content?: Maybe<Scalars['String']>
  contributionId?: Maybe<Scalars['uuid']>
  createAt?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
}

/** update columns of table "comments" */
export enum Comments_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  ContributionId = 'contributionId',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  CreateBy = 'createBy',
  /** column name */
  Id = 'id',
}

/** columns and relationships of "contributions" */
export type Contributions = {
  __typename?: 'contributions'
  artical?: Maybe<Scalars['jsonb']>
  /** An array relationship */
  comments: Array<Comments>
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate
  createdAt?: Maybe<Scalars['timestamp']>
  deleted?: Maybe<Scalars['Boolean']>
  /** An object relationship */
  faculty?: Maybe<Facultys>
  facultyId?: Maybe<Scalars['uuid']>
  id: Scalars['uuid']
  image?: Maybe<Scalars['jsonb']>
  isSelected?: Maybe<Scalars['Boolean']>
  /** An object relationship */
  magazine?: Maybe<Magazines>
  magazineId?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['uuid']>
  publicBy?: Maybe<Scalars['uuid']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
  /** An object relationship */
  user?: Maybe<Users>
  /** An object relationship */
  userByPublicBy?: Maybe<Users>
}

/** columns and relationships of "contributions" */
export type ContributionsArticalArgs = {
  path?: Maybe<Scalars['String']>
}

/** columns and relationships of "contributions" */
export type ContributionsCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** columns and relationships of "contributions" */
export type ContributionsComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** columns and relationships of "contributions" */
export type ContributionsImageArgs = {
  path?: Maybe<Scalars['String']>
}

/** aggregated selection of "contributions" */
export type Contributions_Aggregate = {
  __typename?: 'contributions_aggregate'
  aggregate?: Maybe<Contributions_Aggregate_Fields>
  nodes: Array<Contributions>
}

/** aggregate fields of "contributions" */
export type Contributions_Aggregate_Fields = {
  __typename?: 'contributions_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Contributions_Max_Fields>
  min?: Maybe<Contributions_Min_Fields>
}

/** aggregate fields of "contributions" */
export type Contributions_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Contributions_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "contributions" */
export type Contributions_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Contributions_Max_Order_By>
  min?: Maybe<Contributions_Min_Order_By>
}

/** append existing jsonb value of filtered columns with new jsonb value */
export type Contributions_Append_Input = {
  artical?: Maybe<Scalars['jsonb']>
  image?: Maybe<Scalars['jsonb']>
}

/** input type for inserting array relation for remote table "contributions" */
export type Contributions_Arr_Rel_Insert_Input = {
  data: Array<Contributions_Insert_Input>
  on_conflict?: Maybe<Contributions_On_Conflict>
}

/** Boolean expression to filter rows from the table "contributions". All fields are combined with a logical 'AND'. */
export type Contributions_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Contributions_Bool_Exp>>>
  _not?: Maybe<Contributions_Bool_Exp>
  _or?: Maybe<Array<Maybe<Contributions_Bool_Exp>>>
  artical?: Maybe<Jsonb_Comparison_Exp>
  comments?: Maybe<Comments_Bool_Exp>
  createdAt?: Maybe<Timestamp_Comparison_Exp>
  deleted?: Maybe<Boolean_Comparison_Exp>
  faculty?: Maybe<Facultys_Bool_Exp>
  facultyId?: Maybe<Uuid_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  image?: Maybe<Jsonb_Comparison_Exp>
  isSelected?: Maybe<Boolean_Comparison_Exp>
  magazine?: Maybe<Magazines_Bool_Exp>
  magazineId?: Maybe<Uuid_Comparison_Exp>
  ownerId?: Maybe<Uuid_Comparison_Exp>
  publicBy?: Maybe<Uuid_Comparison_Exp>
  title?: Maybe<String_Comparison_Exp>
  updatedAt?: Maybe<Timestamp_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
  userByPublicBy?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "contributions" */
export enum Contributions_Constraint {
  /** unique or primary key constraint */
  ContributionsPkey = 'contributions_pkey',
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Contributions_Delete_At_Path_Input = {
  artical?: Maybe<Array<Maybe<Scalars['String']>>>
  image?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Contributions_Delete_Elem_Input = {
  artical?: Maybe<Scalars['Int']>
  image?: Maybe<Scalars['Int']>
}

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Contributions_Delete_Key_Input = {
  artical?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
}

/** input type for inserting data into table "contributions" */
export type Contributions_Insert_Input = {
  artical?: Maybe<Scalars['jsonb']>
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>
  createdAt?: Maybe<Scalars['timestamp']>
  deleted?: Maybe<Scalars['Boolean']>
  faculty?: Maybe<Facultys_Obj_Rel_Insert_Input>
  facultyId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['jsonb']>
  isSelected?: Maybe<Scalars['Boolean']>
  magazine?: Maybe<Magazines_Obj_Rel_Insert_Input>
  magazineId?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['uuid']>
  publicBy?: Maybe<Scalars['uuid']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
  userByPublicBy?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Contributions_Max_Fields = {
  __typename?: 'contributions_max_fields'
  createdAt?: Maybe<Scalars['timestamp']>
  facultyId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  magazineId?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['uuid']>
  publicBy?: Maybe<Scalars['uuid']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** order by max() on columns of table "contributions" */
export type Contributions_Max_Order_By = {
  createdAt?: Maybe<Order_By>
  facultyId?: Maybe<Order_By>
  id?: Maybe<Order_By>
  magazineId?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  publicBy?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Contributions_Min_Fields = {
  __typename?: 'contributions_min_fields'
  createdAt?: Maybe<Scalars['timestamp']>
  facultyId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  magazineId?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['uuid']>
  publicBy?: Maybe<Scalars['uuid']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** order by min() on columns of table "contributions" */
export type Contributions_Min_Order_By = {
  createdAt?: Maybe<Order_By>
  facultyId?: Maybe<Order_By>
  id?: Maybe<Order_By>
  magazineId?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  publicBy?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
}

/** response of any mutation on the table "contributions" */
export type Contributions_Mutation_Response = {
  __typename?: 'contributions_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Contributions>
}

/** input type for inserting object relation for remote table "contributions" */
export type Contributions_Obj_Rel_Insert_Input = {
  data: Contributions_Insert_Input
  on_conflict?: Maybe<Contributions_On_Conflict>
}

/** on conflict condition type for table "contributions" */
export type Contributions_On_Conflict = {
  constraint: Contributions_Constraint
  update_columns: Array<Contributions_Update_Column>
  where?: Maybe<Contributions_Bool_Exp>
}

/** ordering options when selecting data from "contributions" */
export type Contributions_Order_By = {
  artical?: Maybe<Order_By>
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>
  createdAt?: Maybe<Order_By>
  deleted?: Maybe<Order_By>
  faculty?: Maybe<Facultys_Order_By>
  facultyId?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image?: Maybe<Order_By>
  isSelected?: Maybe<Order_By>
  magazine?: Maybe<Magazines_Order_By>
  magazineId?: Maybe<Order_By>
  ownerId?: Maybe<Order_By>
  publicBy?: Maybe<Order_By>
  title?: Maybe<Order_By>
  updatedAt?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
  userByPublicBy?: Maybe<Users_Order_By>
}

/** primary key columns input for table: "contributions" */
export type Contributions_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Contributions_Prepend_Input = {
  artical?: Maybe<Scalars['jsonb']>
  image?: Maybe<Scalars['jsonb']>
}

/** select columns of table "contributions" */
export enum Contributions_Select_Column {
  /** column name */
  Artical = 'artical',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  FacultyId = 'facultyId',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsSelected = 'isSelected',
  /** column name */
  MagazineId = 'magazineId',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  PublicBy = 'publicBy',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** input type for updating data in table "contributions" */
export type Contributions_Set_Input = {
  artical?: Maybe<Scalars['jsonb']>
  createdAt?: Maybe<Scalars['timestamp']>
  deleted?: Maybe<Scalars['Boolean']>
  facultyId?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  image?: Maybe<Scalars['jsonb']>
  isSelected?: Maybe<Scalars['Boolean']>
  magazineId?: Maybe<Scalars['uuid']>
  ownerId?: Maybe<Scalars['uuid']>
  publicBy?: Maybe<Scalars['uuid']>
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['timestamp']>
}

/** update columns of table "contributions" */
export enum Contributions_Update_Column {
  /** column name */
  Artical = 'artical',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  FacultyId = 'facultyId',
  /** column name */
  Id = 'id',
  /** column name */
  Image = 'image',
  /** column name */
  IsSelected = 'isSelected',
  /** column name */
  MagazineId = 'magazineId',
  /** column name */
  OwnerId = 'ownerId',
  /** column name */
  PublicBy = 'publicBy',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updatedAt',
}

/** columns and relationships of "facultys" */
export type Facultys = {
  __typename?: 'facultys'
  /** An array relationship */
  contributions: Array<Contributions>
  /** An aggregated array relationship */
  contributions_aggregate: Contributions_Aggregate
  id: Scalars['uuid']
  label?: Maybe<Scalars['String']>
  /** An array relationship */
  users: Array<Users>
  /** An aggregated array relationship */
  users_aggregate: Users_Aggregate
}

/** columns and relationships of "facultys" */
export type FacultysContributionsArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** columns and relationships of "facultys" */
export type FacultysContributions_AggregateArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** columns and relationships of "facultys" */
export type FacultysUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** columns and relationships of "facultys" */
export type FacultysUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** aggregated selection of "facultys" */
export type Facultys_Aggregate = {
  __typename?: 'facultys_aggregate'
  aggregate?: Maybe<Facultys_Aggregate_Fields>
  nodes: Array<Facultys>
}

/** aggregate fields of "facultys" */
export type Facultys_Aggregate_Fields = {
  __typename?: 'facultys_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Facultys_Max_Fields>
  min?: Maybe<Facultys_Min_Fields>
}

/** aggregate fields of "facultys" */
export type Facultys_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Facultys_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "facultys" */
export type Facultys_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Facultys_Max_Order_By>
  min?: Maybe<Facultys_Min_Order_By>
}

/** input type for inserting array relation for remote table "facultys" */
export type Facultys_Arr_Rel_Insert_Input = {
  data: Array<Facultys_Insert_Input>
  on_conflict?: Maybe<Facultys_On_Conflict>
}

/** Boolean expression to filter rows from the table "facultys". All fields are combined with a logical 'AND'. */
export type Facultys_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Facultys_Bool_Exp>>>
  _not?: Maybe<Facultys_Bool_Exp>
  _or?: Maybe<Array<Maybe<Facultys_Bool_Exp>>>
  contributions?: Maybe<Contributions_Bool_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
  users?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "facultys" */
export enum Facultys_Constraint {
  /** unique or primary key constraint */
  FacultysLabelKey = 'facultys_label_key',
  /** unique or primary key constraint */
  FacultysPkey = 'facultys_pkey',
}

/** input type for inserting data into table "facultys" */
export type Facultys_Insert_Input = {
  contributions?: Maybe<Contributions_Arr_Rel_Insert_Input>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  users?: Maybe<Users_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Facultys_Max_Fields = {
  __typename?: 'facultys_max_fields'
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "facultys" */
export type Facultys_Max_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Facultys_Min_Fields = {
  __typename?: 'facultys_min_fields'
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "facultys" */
export type Facultys_Min_Order_By = {
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
}

/** response of any mutation on the table "facultys" */
export type Facultys_Mutation_Response = {
  __typename?: 'facultys_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Facultys>
}

/** input type for inserting object relation for remote table "facultys" */
export type Facultys_Obj_Rel_Insert_Input = {
  data: Facultys_Insert_Input
  on_conflict?: Maybe<Facultys_On_Conflict>
}

/** on conflict condition type for table "facultys" */
export type Facultys_On_Conflict = {
  constraint: Facultys_Constraint
  update_columns: Array<Facultys_Update_Column>
  where?: Maybe<Facultys_Bool_Exp>
}

/** ordering options when selecting data from "facultys" */
export type Facultys_Order_By = {
  contributions_aggregate?: Maybe<Contributions_Aggregate_Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  users_aggregate?: Maybe<Users_Aggregate_Order_By>
}

/** primary key columns input for table: "facultys" */
export type Facultys_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "facultys" */
export enum Facultys_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
}

/** input type for updating data in table "facultys" */
export type Facultys_Set_Input = {
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** update columns of table "facultys" */
export enum Facultys_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
}

/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>
  _eq?: Maybe<Scalars['jsonb']>
  _gt?: Maybe<Scalars['jsonb']>
  _gte?: Maybe<Scalars['jsonb']>
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>
  _in?: Maybe<Array<Scalars['jsonb']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['jsonb']>
  _lte?: Maybe<Scalars['jsonb']>
  _neq?: Maybe<Scalars['jsonb']>
  _nin?: Maybe<Array<Scalars['jsonb']>>
}

/** columns and relationships of "logs" */
export type Logs = {
  __typename?: 'logs'
  content?: Maybe<Scalars['String']>
  create_at?: Maybe<Scalars['timestamp']>
  id: Scalars['numeric']
  level?: Maybe<Scalars['numeric']>
}

/** aggregated selection of "logs" */
export type Logs_Aggregate = {
  __typename?: 'logs_aggregate'
  aggregate?: Maybe<Logs_Aggregate_Fields>
  nodes: Array<Logs>
}

/** aggregate fields of "logs" */
export type Logs_Aggregate_Fields = {
  __typename?: 'logs_aggregate_fields'
  avg?: Maybe<Logs_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Logs_Max_Fields>
  min?: Maybe<Logs_Min_Fields>
  stddev?: Maybe<Logs_Stddev_Fields>
  stddev_pop?: Maybe<Logs_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Logs_Stddev_Samp_Fields>
  sum?: Maybe<Logs_Sum_Fields>
  var_pop?: Maybe<Logs_Var_Pop_Fields>
  var_samp?: Maybe<Logs_Var_Samp_Fields>
  variance?: Maybe<Logs_Variance_Fields>
}

/** aggregate fields of "logs" */
export type Logs_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Logs_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "logs" */
export type Logs_Aggregate_Order_By = {
  avg?: Maybe<Logs_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Logs_Max_Order_By>
  min?: Maybe<Logs_Min_Order_By>
  stddev?: Maybe<Logs_Stddev_Order_By>
  stddev_pop?: Maybe<Logs_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Logs_Stddev_Samp_Order_By>
  sum?: Maybe<Logs_Sum_Order_By>
  var_pop?: Maybe<Logs_Var_Pop_Order_By>
  var_samp?: Maybe<Logs_Var_Samp_Order_By>
  variance?: Maybe<Logs_Variance_Order_By>
}

/** input type for inserting array relation for remote table "logs" */
export type Logs_Arr_Rel_Insert_Input = {
  data: Array<Logs_Insert_Input>
  on_conflict?: Maybe<Logs_On_Conflict>
}

/** aggregate avg on columns */
export type Logs_Avg_Fields = {
  __typename?: 'logs_avg_fields'
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "logs" */
export type Logs_Avg_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "logs". All fields are combined with a logical 'AND'. */
export type Logs_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Logs_Bool_Exp>>>
  _not?: Maybe<Logs_Bool_Exp>
  _or?: Maybe<Array<Maybe<Logs_Bool_Exp>>>
  content?: Maybe<String_Comparison_Exp>
  create_at?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Numeric_Comparison_Exp>
  level?: Maybe<Numeric_Comparison_Exp>
}

/** unique or primary key constraints on table "logs" */
export enum Logs_Constraint {
  /** unique or primary key constraint */
  LogsPkey = 'logs_pkey',
}

/** input type for incrementing integer column in table "logs" */
export type Logs_Inc_Input = {
  id?: Maybe<Scalars['numeric']>
  level?: Maybe<Scalars['numeric']>
}

/** input type for inserting data into table "logs" */
export type Logs_Insert_Input = {
  content?: Maybe<Scalars['String']>
  create_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['numeric']>
  level?: Maybe<Scalars['numeric']>
}

/** aggregate max on columns */
export type Logs_Max_Fields = {
  __typename?: 'logs_max_fields'
  content?: Maybe<Scalars['String']>
  create_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['numeric']>
  level?: Maybe<Scalars['numeric']>
}

/** order by max() on columns of table "logs" */
export type Logs_Max_Order_By = {
  content?: Maybe<Order_By>
  create_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Logs_Min_Fields = {
  __typename?: 'logs_min_fields'
  content?: Maybe<Scalars['String']>
  create_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['numeric']>
  level?: Maybe<Scalars['numeric']>
}

/** order by min() on columns of table "logs" */
export type Logs_Min_Order_By = {
  content?: Maybe<Order_By>
  create_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** response of any mutation on the table "logs" */
export type Logs_Mutation_Response = {
  __typename?: 'logs_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Logs>
}

/** input type for inserting object relation for remote table "logs" */
export type Logs_Obj_Rel_Insert_Input = {
  data: Logs_Insert_Input
  on_conflict?: Maybe<Logs_On_Conflict>
}

/** on conflict condition type for table "logs" */
export type Logs_On_Conflict = {
  constraint: Logs_Constraint
  update_columns: Array<Logs_Update_Column>
  where?: Maybe<Logs_Bool_Exp>
}

/** ordering options when selecting data from "logs" */
export type Logs_Order_By = {
  content?: Maybe<Order_By>
  create_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** primary key columns input for table: "logs" */
export type Logs_Pk_Columns_Input = {
  id: Scalars['numeric']
}

/** select columns of table "logs" */
export enum Logs_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
}

/** input type for updating data in table "logs" */
export type Logs_Set_Input = {
  content?: Maybe<Scalars['String']>
  create_at?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['numeric']>
  level?: Maybe<Scalars['numeric']>
}

/** aggregate stddev on columns */
export type Logs_Stddev_Fields = {
  __typename?: 'logs_stddev_fields'
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "logs" */
export type Logs_Stddev_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Logs_Stddev_Pop_Fields = {
  __typename?: 'logs_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "logs" */
export type Logs_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Logs_Stddev_Samp_Fields = {
  __typename?: 'logs_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "logs" */
export type Logs_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Logs_Sum_Fields = {
  __typename?: 'logs_sum_fields'
  id?: Maybe<Scalars['numeric']>
  level?: Maybe<Scalars['numeric']>
}

/** order by sum() on columns of table "logs" */
export type Logs_Sum_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** update columns of table "logs" */
export enum Logs_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreateAt = 'create_at',
  /** column name */
  Id = 'id',
  /** column name */
  Level = 'level',
}

/** aggregate var_pop on columns */
export type Logs_Var_Pop_Fields = {
  __typename?: 'logs_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "logs" */
export type Logs_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Logs_Var_Samp_Fields = {
  __typename?: 'logs_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "logs" */
export type Logs_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Logs_Variance_Fields = {
  __typename?: 'logs_variance_fields'
  id?: Maybe<Scalars['Float']>
  level?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "logs" */
export type Logs_Variance_Order_By = {
  id?: Maybe<Order_By>
  level?: Maybe<Order_By>
}

/** columns and relationships of "magazines" */
export type Magazines = {
  __typename?: 'magazines'
  closureFinal?: Maybe<Scalars['timestamp']>
  closureTemp?: Maybe<Scalars['timestamp']>
  /** An array relationship */
  contributions: Array<Contributions>
  /** An aggregated array relationship */
  contributions_aggregate: Contributions_Aggregate
  createBy?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id: Scalars['uuid']
  label?: Maybe<Scalars['String']>
  /** An object relationship */
  user?: Maybe<Users>
}

/** columns and relationships of "magazines" */
export type MagazinesContributionsArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** columns and relationships of "magazines" */
export type MagazinesContributions_AggregateArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** aggregated selection of "magazines" */
export type Magazines_Aggregate = {
  __typename?: 'magazines_aggregate'
  aggregate?: Maybe<Magazines_Aggregate_Fields>
  nodes: Array<Magazines>
}

/** aggregate fields of "magazines" */
export type Magazines_Aggregate_Fields = {
  __typename?: 'magazines_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Magazines_Max_Fields>
  min?: Maybe<Magazines_Min_Fields>
}

/** aggregate fields of "magazines" */
export type Magazines_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Magazines_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "magazines" */
export type Magazines_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Magazines_Max_Order_By>
  min?: Maybe<Magazines_Min_Order_By>
}

/** input type for inserting array relation for remote table "magazines" */
export type Magazines_Arr_Rel_Insert_Input = {
  data: Array<Magazines_Insert_Input>
  on_conflict?: Maybe<Magazines_On_Conflict>
}

/** Boolean expression to filter rows from the table "magazines". All fields are combined with a logical 'AND'. */
export type Magazines_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Magazines_Bool_Exp>>>
  _not?: Maybe<Magazines_Bool_Exp>
  _or?: Maybe<Array<Maybe<Magazines_Bool_Exp>>>
  closureFinal?: Maybe<Timestamp_Comparison_Exp>
  closureTemp?: Maybe<Timestamp_Comparison_Exp>
  contributions?: Maybe<Contributions_Bool_Exp>
  createBy?: Maybe<Uuid_Comparison_Exp>
  createdAt?: Maybe<Timestamp_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  label?: Maybe<String_Comparison_Exp>
  user?: Maybe<Users_Bool_Exp>
}

/** unique or primary key constraints on table "magazines" */
export enum Magazines_Constraint {
  /** unique or primary key constraint */
  MagazinesLabelKey = 'magazines_label_key',
  /** unique or primary key constraint */
  MagazinesPkey = 'magazines_pkey',
}

/** input type for inserting data into table "magazines" */
export type Magazines_Insert_Input = {
  closureFinal?: Maybe<Scalars['timestamp']>
  closureTemp?: Maybe<Scalars['timestamp']>
  contributions?: Maybe<Contributions_Arr_Rel_Insert_Input>
  createBy?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
  user?: Maybe<Users_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Magazines_Max_Fields = {
  __typename?: 'magazines_max_fields'
  closureFinal?: Maybe<Scalars['timestamp']>
  closureTemp?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "magazines" */
export type Magazines_Max_Order_By = {
  closureFinal?: Maybe<Order_By>
  closureTemp?: Maybe<Order_By>
  createBy?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Magazines_Min_Fields = {
  __typename?: 'magazines_min_fields'
  closureFinal?: Maybe<Scalars['timestamp']>
  closureTemp?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "magazines" */
export type Magazines_Min_Order_By = {
  closureFinal?: Maybe<Order_By>
  closureTemp?: Maybe<Order_By>
  createBy?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
}

/** response of any mutation on the table "magazines" */
export type Magazines_Mutation_Response = {
  __typename?: 'magazines_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Magazines>
}

/** input type for inserting object relation for remote table "magazines" */
export type Magazines_Obj_Rel_Insert_Input = {
  data: Magazines_Insert_Input
  on_conflict?: Maybe<Magazines_On_Conflict>
}

/** on conflict condition type for table "magazines" */
export type Magazines_On_Conflict = {
  constraint: Magazines_Constraint
  update_columns: Array<Magazines_Update_Column>
  where?: Maybe<Magazines_Bool_Exp>
}

/** ordering options when selecting data from "magazines" */
export type Magazines_Order_By = {
  closureFinal?: Maybe<Order_By>
  closureTemp?: Maybe<Order_By>
  contributions_aggregate?: Maybe<Contributions_Aggregate_Order_By>
  createBy?: Maybe<Order_By>
  createdAt?: Maybe<Order_By>
  id?: Maybe<Order_By>
  label?: Maybe<Order_By>
  user?: Maybe<Users_Order_By>
}

/** primary key columns input for table: "magazines" */
export type Magazines_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "magazines" */
export enum Magazines_Select_Column {
  /** column name */
  ClosureFinal = 'closureFinal',
  /** column name */
  ClosureTemp = 'closureTemp',
  /** column name */
  CreateBy = 'createBy',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
}

/** input type for updating data in table "magazines" */
export type Magazines_Set_Input = {
  closureFinal?: Maybe<Scalars['timestamp']>
  closureTemp?: Maybe<Scalars['timestamp']>
  createBy?: Maybe<Scalars['uuid']>
  createdAt?: Maybe<Scalars['timestamp']>
  id?: Maybe<Scalars['uuid']>
  label?: Maybe<Scalars['String']>
}

/** update columns of table "magazines" */
export enum Magazines_Update_Column {
  /** column name */
  ClosureFinal = 'closureFinal',
  /** column name */
  ClosureTemp = 'closureTemp',
  /** column name */
  CreateBy = 'createBy',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Label = 'label',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "comments" */
  delete_comments?: Maybe<Comments_Mutation_Response>
  /** delete single row from the table: "comments" */
  delete_comments_by_pk?: Maybe<Comments>
  /** delete data from the table: "contributions" */
  delete_contributions?: Maybe<Contributions_Mutation_Response>
  /** delete single row from the table: "contributions" */
  delete_contributions_by_pk?: Maybe<Contributions>
  /** delete data from the table: "facultys" */
  delete_facultys?: Maybe<Facultys_Mutation_Response>
  /** delete single row from the table: "facultys" */
  delete_facultys_by_pk?: Maybe<Facultys>
  /** delete data from the table: "logs" */
  delete_logs?: Maybe<Logs_Mutation_Response>
  /** delete single row from the table: "logs" */
  delete_logs_by_pk?: Maybe<Logs>
  /** delete data from the table: "magazines" */
  delete_magazines?: Maybe<Magazines_Mutation_Response>
  /** delete single row from the table: "magazines" */
  delete_magazines_by_pk?: Maybe<Magazines>
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>
  /** insert data into the table: "comments" */
  insert_comments?: Maybe<Comments_Mutation_Response>
  /** insert a single row into the table: "comments" */
  insert_comments_one?: Maybe<Comments>
  /** insert data into the table: "contributions" */
  insert_contributions?: Maybe<Contributions_Mutation_Response>
  /** insert a single row into the table: "contributions" */
  insert_contributions_one?: Maybe<Contributions>
  /** insert data into the table: "facultys" */
  insert_facultys?: Maybe<Facultys_Mutation_Response>
  /** insert a single row into the table: "facultys" */
  insert_facultys_one?: Maybe<Facultys>
  /** insert data into the table: "logs" */
  insert_logs?: Maybe<Logs_Mutation_Response>
  /** insert a single row into the table: "logs" */
  insert_logs_one?: Maybe<Logs>
  /** insert data into the table: "magazines" */
  insert_magazines?: Maybe<Magazines_Mutation_Response>
  /** insert a single row into the table: "magazines" */
  insert_magazines_one?: Maybe<Magazines>
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>
  /** update data of the table: "comments" */
  update_comments?: Maybe<Comments_Mutation_Response>
  /** update single row of the table: "comments" */
  update_comments_by_pk?: Maybe<Comments>
  /** update data of the table: "contributions" */
  update_contributions?: Maybe<Contributions_Mutation_Response>
  /** update single row of the table: "contributions" */
  update_contributions_by_pk?: Maybe<Contributions>
  /** update data of the table: "facultys" */
  update_facultys?: Maybe<Facultys_Mutation_Response>
  /** update single row of the table: "facultys" */
  update_facultys_by_pk?: Maybe<Facultys>
  /** update data of the table: "logs" */
  update_logs?: Maybe<Logs_Mutation_Response>
  /** update single row of the table: "logs" */
  update_logs_by_pk?: Maybe<Logs>
  /** update data of the table: "magazines" */
  update_magazines?: Maybe<Magazines_Mutation_Response>
  /** update single row of the table: "magazines" */
  update_magazines_by_pk?: Maybe<Magazines>
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>
}

/** mutation root */
export type Mutation_RootDelete_CommentsArgs = {
  where: Comments_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Comments_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_ContributionsArgs = {
  where: Contributions_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Contributions_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_FacultysArgs = {
  where: Facultys_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Facultys_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_LogsArgs = {
  where: Logs_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Logs_By_PkArgs = {
  id: Scalars['numeric']
}

/** mutation root */
export type Mutation_RootDelete_MagazinesArgs = {
  where: Magazines_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Magazines_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_CommentsArgs = {
  objects: Array<Comments_Insert_Input>
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Comments_OneArgs = {
  object: Comments_Insert_Input
  on_conflict?: Maybe<Comments_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_ContributionsArgs = {
  objects: Array<Contributions_Insert_Input>
  on_conflict?: Maybe<Contributions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Contributions_OneArgs = {
  object: Contributions_Insert_Input
  on_conflict?: Maybe<Contributions_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_FacultysArgs = {
  objects: Array<Facultys_Insert_Input>
  on_conflict?: Maybe<Facultys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Facultys_OneArgs = {
  object: Facultys_Insert_Input
  on_conflict?: Maybe<Facultys_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_LogsArgs = {
  objects: Array<Logs_Insert_Input>
  on_conflict?: Maybe<Logs_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Logs_OneArgs = {
  object: Logs_Insert_Input
  on_conflict?: Maybe<Logs_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_MagazinesArgs = {
  objects: Array<Magazines_Insert_Input>
  on_conflict?: Maybe<Magazines_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Magazines_OneArgs = {
  object: Magazines_Insert_Input
  on_conflict?: Maybe<Magazines_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_CommentsArgs = {
  _set?: Maybe<Comments_Set_Input>
  where: Comments_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Comments_By_PkArgs = {
  _set?: Maybe<Comments_Set_Input>
  pk_columns: Comments_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_ContributionsArgs = {
  _append?: Maybe<Contributions_Append_Input>
  _delete_at_path?: Maybe<Contributions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Contributions_Delete_Elem_Input>
  _delete_key?: Maybe<Contributions_Delete_Key_Input>
  _prepend?: Maybe<Contributions_Prepend_Input>
  _set?: Maybe<Contributions_Set_Input>
  where: Contributions_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Contributions_By_PkArgs = {
  _append?: Maybe<Contributions_Append_Input>
  _delete_at_path?: Maybe<Contributions_Delete_At_Path_Input>
  _delete_elem?: Maybe<Contributions_Delete_Elem_Input>
  _delete_key?: Maybe<Contributions_Delete_Key_Input>
  _prepend?: Maybe<Contributions_Prepend_Input>
  _set?: Maybe<Contributions_Set_Input>
  pk_columns: Contributions_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_FacultysArgs = {
  _set?: Maybe<Facultys_Set_Input>
  where: Facultys_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Facultys_By_PkArgs = {
  _set?: Maybe<Facultys_Set_Input>
  pk_columns: Facultys_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_LogsArgs = {
  _inc?: Maybe<Logs_Inc_Input>
  _set?: Maybe<Logs_Set_Input>
  where: Logs_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Logs_By_PkArgs = {
  _inc?: Maybe<Logs_Inc_Input>
  _set?: Maybe<Logs_Set_Input>
  pk_columns: Logs_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_MagazinesArgs = {
  _set?: Maybe<Magazines_Set_Input>
  where: Magazines_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Magazines_By_PkArgs = {
  _set?: Maybe<Magazines_Set_Input>
  pk_columns: Magazines_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: Maybe<Users_Set_Input>
  where: Users_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: Maybe<Users_Set_Input>
  pk_columns: Users_Pk_Columns_Input
}

/** expression to compare columns of type numeric. All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>
  _gt?: Maybe<Scalars['numeric']>
  _gte?: Maybe<Scalars['numeric']>
  _in?: Maybe<Array<Scalars['numeric']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['numeric']>
  _lte?: Maybe<Scalars['numeric']>
  _neq?: Maybe<Scalars['numeric']>
  _nin?: Maybe<Array<Scalars['numeric']>>
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "comments" */
  comments: Array<Comments>
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>
  /** fetch data from the table: "contributions" */
  contributions: Array<Contributions>
  /** fetch aggregated fields from the table: "contributions" */
  contributions_aggregate: Contributions_Aggregate
  /** fetch data from the table: "contributions" using primary key columns */
  contributions_by_pk?: Maybe<Contributions>
  /** fetch data from the table: "facultys" */
  facultys: Array<Facultys>
  /** fetch aggregated fields from the table: "facultys" */
  facultys_aggregate: Facultys_Aggregate
  /** fetch data from the table: "facultys" using primary key columns */
  facultys_by_pk?: Maybe<Facultys>
  /** fetch data from the table: "logs" */
  logs: Array<Logs>
  /** fetch aggregated fields from the table: "logs" */
  logs_aggregate: Logs_Aggregate
  /** fetch data from the table: "logs" using primary key columns */
  logs_by_pk?: Maybe<Logs>
  /** fetch data from the table: "magazines" */
  magazines: Array<Magazines>
  /** fetch aggregated fields from the table: "magazines" */
  magazines_aggregate: Magazines_Aggregate
  /** fetch data from the table: "magazines" using primary key columns */
  magazines_by_pk?: Maybe<Magazines>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

/** query root */
export type Query_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** query root */
export type Query_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** query root */
export type Query_RootComments_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootContributionsArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** query root */
export type Query_RootContributions_AggregateArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** query root */
export type Query_RootContributions_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootFacultysArgs = {
  distinct_on?: Maybe<Array<Facultys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Facultys_Order_By>>
  where?: Maybe<Facultys_Bool_Exp>
}

/** query root */
export type Query_RootFacultys_AggregateArgs = {
  distinct_on?: Maybe<Array<Facultys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Facultys_Order_By>>
  where?: Maybe<Facultys_Bool_Exp>
}

/** query root */
export type Query_RootFacultys_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootLogsArgs = {
  distinct_on?: Maybe<Array<Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Logs_Order_By>>
  where?: Maybe<Logs_Bool_Exp>
}

/** query root */
export type Query_RootLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Logs_Order_By>>
  where?: Maybe<Logs_Bool_Exp>
}

/** query root */
export type Query_RootLogs_By_PkArgs = {
  id: Scalars['numeric']
}

/** query root */
export type Query_RootMagazinesArgs = {
  distinct_on?: Maybe<Array<Magazines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Magazines_Order_By>>
  where?: Maybe<Magazines_Bool_Exp>
}

/** query root */
export type Query_RootMagazines_AggregateArgs = {
  distinct_on?: Maybe<Array<Magazines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Magazines_Order_By>>
  where?: Maybe<Magazines_Bool_Exp>
}

/** query root */
export type Query_RootMagazines_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "comments" */
  comments: Array<Comments>
  /** fetch aggregated fields from the table: "comments" */
  comments_aggregate: Comments_Aggregate
  /** fetch data from the table: "comments" using primary key columns */
  comments_by_pk?: Maybe<Comments>
  /** fetch data from the table: "contributions" */
  contributions: Array<Contributions>
  /** fetch aggregated fields from the table: "contributions" */
  contributions_aggregate: Contributions_Aggregate
  /** fetch data from the table: "contributions" using primary key columns */
  contributions_by_pk?: Maybe<Contributions>
  /** fetch data from the table: "facultys" */
  facultys: Array<Facultys>
  /** fetch aggregated fields from the table: "facultys" */
  facultys_aggregate: Facultys_Aggregate
  /** fetch data from the table: "facultys" using primary key columns */
  facultys_by_pk?: Maybe<Facultys>
  /** fetch data from the table: "logs" */
  logs: Array<Logs>
  /** fetch aggregated fields from the table: "logs" */
  logs_aggregate: Logs_Aggregate
  /** fetch data from the table: "logs" using primary key columns */
  logs_by_pk?: Maybe<Logs>
  /** fetch data from the table: "magazines" */
  magazines: Array<Magazines>
  /** fetch aggregated fields from the table: "magazines" */
  magazines_aggregate: Magazines_Aggregate
  /** fetch data from the table: "magazines" using primary key columns */
  magazines_by_pk?: Maybe<Magazines>
  /** fetch data from the table: "users" */
  users: Array<Users>
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>
}

/** subscription root */
export type Subscription_RootCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** subscription root */
export type Subscription_RootComments_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootContributionsArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootContributions_AggregateArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** subscription root */
export type Subscription_RootContributions_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootFacultysArgs = {
  distinct_on?: Maybe<Array<Facultys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Facultys_Order_By>>
  where?: Maybe<Facultys_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFacultys_AggregateArgs = {
  distinct_on?: Maybe<Array<Facultys_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Facultys_Order_By>>
  where?: Maybe<Facultys_Bool_Exp>
}

/** subscription root */
export type Subscription_RootFacultys_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootLogsArgs = {
  distinct_on?: Maybe<Array<Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Logs_Order_By>>
  where?: Maybe<Logs_Bool_Exp>
}

/** subscription root */
export type Subscription_RootLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Logs_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Logs_Order_By>>
  where?: Maybe<Logs_Bool_Exp>
}

/** subscription root */
export type Subscription_RootLogs_By_PkArgs = {
  id: Scalars['numeric']
}

/** subscription root */
export type Subscription_RootMagazinesArgs = {
  distinct_on?: Maybe<Array<Magazines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Magazines_Order_By>>
  where?: Maybe<Magazines_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMagazines_AggregateArgs = {
  distinct_on?: Maybe<Array<Magazines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Magazines_Order_By>>
  where?: Maybe<Magazines_Bool_Exp>
}

/** subscription root */
export type Subscription_RootMagazines_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Users_Order_By>>
  where?: Maybe<Users_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']
}

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>
  _gt?: Maybe<Scalars['timestamp']>
  _gte?: Maybe<Scalars['timestamp']>
  _in?: Maybe<Array<Scalars['timestamp']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamp']>
  _lte?: Maybe<Scalars['timestamp']>
  _neq?: Maybe<Scalars['timestamp']>
  _nin?: Maybe<Array<Scalars['timestamp']>>
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users'
  /** An array relationship */
  comments: Array<Comments>
  /** An aggregated array relationship */
  comments_aggregate: Comments_Aggregate
  /** An array relationship */
  contributions: Array<Contributions>
  /** An array relationship */
  contributionsByPublicBy: Array<Contributions>
  /** An aggregated array relationship */
  contributionsByPublicBy_aggregate: Contributions_Aggregate
  /** An aggregated array relationship */
  contributions_aggregate: Contributions_Aggregate
  createdAt?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  /** An object relationship */
  faculty?: Maybe<Facultys>
  facultyId?: Maybe<Scalars['uuid']>
  fullName?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  isDelete?: Maybe<Scalars['Boolean']>
  /** An array relationship */
  magazines: Array<Magazines>
  /** An aggregated array relationship */
  magazines_aggregate: Magazines_Aggregate
  roles?: Maybe<Scalars['String']>
}

/** columns and relationships of "users" */
export type UsersCommentsArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersComments_AggregateArgs = {
  distinct_on?: Maybe<Array<Comments_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Comments_Order_By>>
  where?: Maybe<Comments_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersContributionsArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersContributionsByPublicByArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersContributionsByPublicBy_AggregateArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersContributions_AggregateArgs = {
  distinct_on?: Maybe<Array<Contributions_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Contributions_Order_By>>
  where?: Maybe<Contributions_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersMagazinesArgs = {
  distinct_on?: Maybe<Array<Magazines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Magazines_Order_By>>
  where?: Maybe<Magazines_Bool_Exp>
}

/** columns and relationships of "users" */
export type UsersMagazines_AggregateArgs = {
  distinct_on?: Maybe<Array<Magazines_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Magazines_Order_By>>
  where?: Maybe<Magazines_Bool_Exp>
}

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate'
  aggregate?: Maybe<Users_Aggregate_Fields>
  nodes: Array<Users>
}

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Users_Max_Fields>
  min?: Maybe<Users_Min_Fields>
}

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Users_Max_Order_By>
  min?: Maybe<Users_Min_Order_By>
}

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>
  on_conflict?: Maybe<Users_On_Conflict>
}

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>
  _not?: Maybe<Users_Bool_Exp>
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>
  comments?: Maybe<Comments_Bool_Exp>
  contributions?: Maybe<Contributions_Bool_Exp>
  contributionsByPublicBy?: Maybe<Contributions_Bool_Exp>
  createdAt?: Maybe<Timestamp_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  faculty?: Maybe<Facultys_Bool_Exp>
  facultyId?: Maybe<Uuid_Comparison_Exp>
  fullName?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  isDelete?: Maybe<Boolean_Comparison_Exp>
  magazines?: Maybe<Magazines_Bool_Exp>
  roles?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  comments?: Maybe<Comments_Arr_Rel_Insert_Input>
  contributions?: Maybe<Contributions_Arr_Rel_Insert_Input>
  contributionsByPublicBy?: Maybe<Contributions_Arr_Rel_Insert_Input>
  createdAt?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  faculty?: Maybe<Facultys_Obj_Rel_Insert_Input>
  facultyId?: Maybe<Scalars['uuid']>
  fullName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  isDelete?: Maybe<Scalars['Boolean']>
  magazines?: Maybe<Magazines_Arr_Rel_Insert_Input>
  roles?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields'
  createdAt?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  facultyId?: Maybe<Scalars['uuid']>
  fullName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  roles?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  createdAt?: Maybe<Order_By>
  email?: Maybe<Order_By>
  facultyId?: Maybe<Order_By>
  fullName?: Maybe<Order_By>
  id?: Maybe<Order_By>
  roles?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields'
  createdAt?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  facultyId?: Maybe<Scalars['uuid']>
  fullName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  roles?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  createdAt?: Maybe<Order_By>
  email?: Maybe<Order_By>
  facultyId?: Maybe<Order_By>
  fullName?: Maybe<Order_By>
  id?: Maybe<Order_By>
  roles?: Maybe<Order_By>
}

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Users>
}

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input
  on_conflict?: Maybe<Users_On_Conflict>
}

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint
  update_columns: Array<Users_Update_Column>
  where?: Maybe<Users_Bool_Exp>
}

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  comments_aggregate?: Maybe<Comments_Aggregate_Order_By>
  contributionsByPublicBy_aggregate?: Maybe<Contributions_Aggregate_Order_By>
  contributions_aggregate?: Maybe<Contributions_Aggregate_Order_By>
  createdAt?: Maybe<Order_By>
  email?: Maybe<Order_By>
  faculty?: Maybe<Facultys_Order_By>
  facultyId?: Maybe<Order_By>
  fullName?: Maybe<Order_By>
  id?: Maybe<Order_By>
  isDelete?: Maybe<Order_By>
  magazines_aggregate?: Maybe<Magazines_Aggregate_Order_By>
  roles?: Maybe<Order_By>
}

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FacultyId = 'facultyId',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDelete = 'isDelete',
  /** column name */
  Roles = 'roles',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  createdAt?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  facultyId?: Maybe<Scalars['uuid']>
  fullName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  isDelete?: Maybe<Scalars['Boolean']>
  roles?: Maybe<Scalars['String']>
}

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Email = 'email',
  /** column name */
  FacultyId = 'facultyId',
  /** column name */
  FullName = 'fullName',
  /** column name */
  Id = 'id',
  /** column name */
  IsDelete = 'isDelete',
  /** column name */
  Roles = 'roles',
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}
