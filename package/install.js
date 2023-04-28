
import hBreadcrumb from './h-breadcrumb'
import hButton from "./h-button"
import hMenu from './h-menu'
import loading from './h-loading'
import hFilemanager from './h-filemanager'
import hForm from './h-form'
import hSelect from './h-select'
import hPagination from "./h-pagination"
import hInput from "./h-input"
import hFall from "./h-fall"
import hNotice from "./h-notice"
import hSearch from "./h-search"
import hRouter from "./h-router"
import hDialog from "./h-dialog"
import hSwiper from "./h-swiper"
import hMessage from "./h-message"
import "./common/index.scss"


const install = function (app) {
    app.use(hBreadcrumb);
    app.use(hButton);
    app.use(hMenu);
    app.use(loading);
    app.use(hFilemanager);
    app.use(hForm);
    app.use(hSelect);
    app.use(hPagination);
    app.use(hInput);
    app.use(hFall);
    app.use(hNotice);
    app.use(hSearch);
    app.use(hRouter);
    app.use(hDialog);
    app.use(hSwiper);
    app.use(hMessage);
}


export default install;
