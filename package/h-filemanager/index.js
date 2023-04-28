
import hLoading from "../h-loading"
import hMessage from "../h-message"
import hMenu from "../h-menu"
import hButton from "../h-button"
import hSearch from "../h-search"
import hBreadcrumb from "../h-breadcrumb"
import hPagination from "../h-pagination"
import hDialog from "../h-dialog"
import hForm from "../h-form"
import hInput from "../h-input"
import hFilemanager from './h-filemanager.vue'
import "../common/modules/h-filemanager.scss"
import hevueImgPreview from 'hevue-img-preview'
export default (app) => {
    app.use(hLoading)
    app.use(hMessage)
    app.use(hMenu)
    app.use(hButton)
    app.use(hSearch)
    app.use(hBreadcrumb)
    app.use(hPagination)
    app.use(hDialog)
    app.use(hInput)
    app.use(hForm)
    app.use(hevueImgPreview)
    app.component("h-filemanager", hFilemanager)
}