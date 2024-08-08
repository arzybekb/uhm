/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close();
  };
  return { tg, onClose, user: tg?.initDataUnsafe?.user };
};
