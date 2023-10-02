import { IsNotEmpty, IsString } from 'class-validator';

class ArticleDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;
}

export default ArticleDto;
