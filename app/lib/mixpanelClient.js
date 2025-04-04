import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const initMixpanel = () => {
  console.log("MIXPANEL_TOKEN", MIXPANEL_TOKEN,'->',process.env.NEXT_PUBLIC_HOTJAR_TRACK_CODE);
  if (!MIXPANEL_TOKEN) {
    console.warn('Mixpanel token is missing! Check your .env file.');
    return;
  }

  mixpanel.init(MIXPANEL_TOKEN, { autocapture: true });
}