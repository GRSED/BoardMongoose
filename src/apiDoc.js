/**
 * @api {get} /notice Request Notice list
 * @apiName GetNoticeList
 * @apiGroup Notice
 *
 * @apiQuery {String} [category] 카테고리번호
 * @apiQuery {String} [title] 제목
 * @apiQuery {String} [writer] 작성자
 *
 * @apiSuccess {Array} noticeList 공지사항목록
 */

/**
 * @api {post} /notice Create a new Notice
 * @apiName CreateNotice
 * @apiGroup Notice
 *
 * @apiBody {String} category 카테고리번호
 * @apiBody {String} title 제목
 * @apiBody {String} content 내용
 * @apiBody {String} writer 작성자
 * @apiBody {Date} [noticeDate=Date.now()] 공지일
 * @apiBody {String} [fileUrl] 첨부파일Url
 * @apiBody {Boolean} importance 중요공지여부
 * @apiBody {String} right 열람권한
 * @apiBody {Boolean} flag=false 공개여부
 *
 * @apiSuccess {Object} notice 생성된 공지사항
 */

/**
 * @api {get} /notice/:id Read a Notice by id
 * @apiName GetNotice
 * @apiGroup Notice
 *
 * @apiParam {String} id 공지사항PK
 *
 * @apiSuccess {Object} notice 공지사항
 */

/**
 * @api {put} /notice/:id Update a Notice by id
 * @apiName UpdateNotice
 * @apiGroup Notice
 *
 * @apiParam {String} id 공지사항PK
 *
 * @apiBody {String} [category] 카테고리번호
 * @apiBody {String} [title] 제목
 * @apiBody {String} [content] 내용
 * @apiBody {String} [writer] 작성자
 * @apiBody {Date} [noticeDate] 공지일
 * @apiBody {String} [fileUrl] 첨부파일Url
 * @apiBody {Boolean} [importance] 중요공지여부
 * @apiBody {String} [right] 열람권한
 * @apiBody {Boolean} [flag] 공개여부
 *
 * @apiSuccess {Object} notice 수정 전 공지사항
 */

/**
 * @api {delete} /notice/:id Delete a Notice by id
 * @apiName DeleteNotice
 * @apiGroup Notice
 *
 * @apiParam {String} id 공지사항PK
 *
 * @apiSuccess {Object} notice 삭제된 공지사항
 */
