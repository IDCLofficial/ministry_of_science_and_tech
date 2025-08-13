import { contentfulService } from "../../../lib/contentful";

type news={
  title: string,
  date: string,
  img: string,
  badge: string,
  desc: string
}

const newsList:news[] = [];

const ministryId = "1sOjmVJdowuZ4ZUs23nVQJ"

export async function getNewsList(){
  const newsList = await contentfulService.getBlogsByMinistry(ministryId);
  return newsList;
}

export default newsList; 