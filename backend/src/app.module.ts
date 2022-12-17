import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      entities: ['./backend/entities/**/*.entity.js'],
      entitiesTs: ['./src/entities/**/*.entity.ts'],
      dbName: 'nestjs-app',
      type: 'mongo',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
