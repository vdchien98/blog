

class NewsController {

    //[GET] /news
    index(req, res) {
        res.render('news');
    }
//[GET] /news/:slug
    show(req, res){
        res.send('news detail !!!!')

    }
}

module.exports = new NewsController ;  // xuất ra ngoài đồng thời khởi tạo 1 đối tượng 