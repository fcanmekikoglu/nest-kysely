import { Kysely } from 'kysely';
import { ArticlesTable } from 'src/articles/articlesTable';

export interface Tables {
  articles: ArticlesTable;
}

export class Database extends Kysely<Tables> {}
