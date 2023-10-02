import { Database } from 'src/database/database';
import { Article } from './article.model';
import ArticleDto from './dto/article.dto';

export class ArticlesRepository {
  constructor(private readonly database: Database) {}

  async getById(id: number) {
    const databaseResponse = await this.database
      .selectFrom('articles')
      .where('id', '=', id)
      .selectAll()
      .executeTakeFirst();

    if (databaseResponse) {
      return new Article(databaseResponse);
    }
  }

  async getAll() {
    const databaseResponse = await this.database
      .selectFrom('articles')
      .selectAll()
      .execute();
    return databaseResponse.map((articleData) => new Article(articleData));
  }

  async create(data: ArticleDto) {
    const databaseResponse = await this.database
      .insertInto('articles')
      .values({
        title: data.title,
        article_content: data.content,
      })
      .returningAll()
      .executeTakeFirst();

    if (databaseResponse) {
      return new Article(databaseResponse);
    }
  }

  async update(id: number, data: ArticleDto) {
    const databaseResponse = await this.database
      .updateTable('articles')
      .set({ title: data.title, article_content: data.content })
      .where('id', '=', id)
      .returningAll()
      .executeTakeFirst();

    if (databaseResponse) {
      return new Article(databaseResponse);
    }
  }
}
