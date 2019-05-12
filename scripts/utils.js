const app = getApp();

const postUserStep = (obj, id) => {
    const param = {
        movieId: obj['movieId'],
        cinemaId: obj['cinemaId'],
        showtimeId: obj['showtimeId'],
        orderId: obj['orderId'],
        activateId: id,
        activateType: obj['activateType'],
        recordType: obj['recordType']
    }
    console.log('recordUserStep', param);
    return app.request().get('/user/recordUserInfo').header({
        'mallcoo-mall-id': wx.getStorageSync('mallId')
    }).query(param).end();
}

export const recordUserStep = (obj) => {
    tt.getSystemInfo({
        success(res) {
            console.log('res', res);
            if (res.appName == 'Toutiao') {
                postUserStep(obj, 2)
            } else {
                postUserStep(obj, 3)
            }
        }
    });
}