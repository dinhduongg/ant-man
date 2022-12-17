import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    MikroOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => {
        console.log('config--------->>>', config);
        return ({
          dbName: config.get('database.mongoDbs'),
          entities: ['./.backend/entities/**/*.entity.js'],
          entitiesTs: ['./backend/entities/**/*.entity.ts'],
          type: 'mongo',
          clientUrl: config.get('database.mongoUrl'),
        })
      },
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
