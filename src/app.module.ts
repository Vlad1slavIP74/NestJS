import { Module }         from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_INTERCEPTOR } from '@nestjs/core';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import {TransformInterceptor} from './transform.interceptor'
import { configModule } from './configure.root';

@Module({
  imports: [UserModule, AuthModule,

    configModule,
    MongooseModule.forRoot(
      process.env.MONODB_WRITE_CONECTION,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
  ]


})
export class AppModule {}
