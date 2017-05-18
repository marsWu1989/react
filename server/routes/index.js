import Router from 'koa-router';
import Home from './../controllers/Home';
import News from './../controllers/News';
import Tob from './../controllers/Tob';
import About from './../controllers/About';
import Road from './../controllers/Road';
import Report from './../controllers/Report';
import Brand from './../controllers/Brand';
import Biz from './../controllers/Biz';
import Cooperate from './../controllers/Cooperate';
import Join from './../controllers/Join';
import Download from './../controllers/Download';

const router = new Router({
    prefix: '/api'
});

/*
 * @brief 测试数据
 * params  id
 * @return json
 */

router.get('/', Home.news);
router.get('/mjsoft', Download.banner);
router.get('/news', News.list);
router.get('/news/:id', News.detail);
router.get('/tob', Tob.num);
router.get('/about', About.about);
router.get('/culture', Road.road);
router.get('/report', Report.list);
router.get('/mojibrand', Brand.list);
router.get('/biz', Biz.list);
router.get('/cooperate', Cooperate.list);
router.get('/job', Join.list);
router.get('/job/:id', Join.detail);

export default router;