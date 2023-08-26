import IMessageString from "./IMessageString";

interface IChats {
  username: string,
  date: string,
  data: IMessageString[],
  userId: number
}

export default IChats;
