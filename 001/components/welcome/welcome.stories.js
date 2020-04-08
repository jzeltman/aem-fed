import WelcomeHTL from './welcome.html';
import WelcomeJSON from './welcome.content';

export default {
  title: 'Welcome',
};

export const Welcome = async () => {
  return {
    content: WelcomeJSON,
    template: await WelcomeHTL
  }
}