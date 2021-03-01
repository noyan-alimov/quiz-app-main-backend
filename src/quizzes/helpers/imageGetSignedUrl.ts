import fetch from 'node-fetch';
import { config } from 'src/config';

export const imageGetSignedUrl = async (fileName: string): Promise<string> => {
  const res = await fetch(`${config.GET_SIGNED_URL_PATH}/${fileName}`);
  const data = await res.json();
  return data.url;
};
