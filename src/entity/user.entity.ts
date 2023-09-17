export interface IUserEntity {
  $typename: 'UserEntity';
  id: string;
  createdAt: Date;
  phoneNumber: string;
  nickname: string;
  bio: string | null;
}
