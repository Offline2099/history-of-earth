export enum Screen {
  mobile,
  tablet,
  desktopSmall,
  desktopNormal
}

export const BREAKPOINTS: Record<Screen, string> = {
  [Screen.mobile]: '(max-width: 599px)',
  [Screen.tablet]: '(min-width: 600px) and (max-width: 991px)',
  [Screen.desktopSmall]: '(min-width: 992px) and (max-width: 1199px)',
  [Screen.desktopNormal]: '(min-width: 1200px)'
}
