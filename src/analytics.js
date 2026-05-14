import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize("G-FT92YGKSQT"); //Needs to be replaces with MeasurmentID obtained form Google Analytics
};

export const trackEvent = (action, category, label) => {
  ReactGA.event({
    action,
    category,
    label,
  });
};