import client from '.';

export const getMessage = () => {
  return client.get(`/messages`);
};

export default getMessage;
