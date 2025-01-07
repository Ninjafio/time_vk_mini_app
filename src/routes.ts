import {
  createHashRouter,
  createPanel,
  createRoot,
  createView,
  RoutesConfig,
} from '@vkontakte/vk-mini-apps-router';

export const DEFAULT_ROOT = 'default_root';

export const DEFAULT_VIEW = 'default_view';

export const DEFAULT_VIEW_PANELS = {
  HOME: 'home',
  LIST: 'list',
  COLLECTIONS: 'collections',
  COLLECTION: 'collection',
  SEARCHRESULT: 'searchresult',
  SEARCHPANEL: 'searchpanel',
} as const;

export const routes = RoutesConfig.create([
  createRoot(DEFAULT_ROOT, [
    createView(DEFAULT_VIEW, [
      createPanel(DEFAULT_VIEW_PANELS.HOME, '/', []),
      createPanel(DEFAULT_VIEW_PANELS.LIST, `/${DEFAULT_VIEW_PANELS.LIST}`, []),
      createPanel(DEFAULT_VIEW_PANELS.COLLECTIONS, `/${DEFAULT_VIEW_PANELS.COLLECTIONS}`, []),
      createPanel(DEFAULT_VIEW_PANELS.COLLECTION, `/${DEFAULT_VIEW_PANELS.COLLECTION}`, []),
      createPanel(DEFAULT_VIEW_PANELS.SEARCHRESULT, `/${DEFAULT_VIEW_PANELS.SEARCHRESULT}`, []),
      createPanel(DEFAULT_VIEW_PANELS.SEARCHPANEL, `/${DEFAULT_VIEW_PANELS.SEARCHPANEL}`, []),
    ]),
  ]),
]);

export const router = createHashRouter(routes.getRoutes());
