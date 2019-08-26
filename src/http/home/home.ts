import http from '../index'
/**
 * 加载新闻列表
 * @param {object} pages 分页
 */
interface NewListPages {
  page: number;
  limit: number;
}
export function loadNewsList (pages: NewListPages): any {
  return http.post(
    `/aboutus/load-news-list`,
    {
      page: pages.page,
      limit: pages.limit
    }
  )
}