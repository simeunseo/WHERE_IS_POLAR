import client from '.';

export const createMessage = (MessageRequest) => {
  return client.post(`/messages`, MessageRequest);
};

export default createMessage;
