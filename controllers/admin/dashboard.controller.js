// [GET] /admin/dashboard
module.exports.dashboard = function(req, res) {
    res.render('admin/pages/dashboard/index.pug', {
        pageTitle: 'Trang tổng quan'
    })
}