import { Controller } from '@tsed/di';
import {
  DateTime, Get, Property, ReadOnly, Required, ArrayOf, Generics, Returns,
} from '@tsed/schema';
import { IdColumn } from '@tsed/objection';

export class EntityBase {
  @IdColumn()
  id: number;

  @Required() @ReadOnly() @DateTime()
  readonly createdAt: string;

  @Required() @ReadOnly() @DateTime()
  readonly updatedAt: string;
}

@Generics('T')
class Data<T> {
  @Required()
  @Property()
  total: number;

  @Required()
  @ArrayOf('T')
  data: T[];
}

@Controller('/product')
export class EntityBaseController {
  @Get('/get')
  @Returns(200, Data).Of(EntityBase)
  get() {
    const data = [new EntityBase()];

    data[0].id = 123;
    data[0].createdAt = new Date().toISOString();
    data[0].updatedAt = new Date().toISOString();

    return {
      total: data.length,
      topLevelFoo: 'topLevelBar',
      data: data.map((d) => ({ ...d, foo: 'bar' })),
    };
  }
}
