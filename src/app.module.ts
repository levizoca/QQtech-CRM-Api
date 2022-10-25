import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ColaboradorModule } from './modules/colaborador.module';
import { SetorModule } from './modules/setor.module';
import { DocumentoModule } from './modules/documento.module';

@Module({
  imports: [ColaboradorModule, SetorModule, DocumentoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
