import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}

///**
// * This is an example of a Hero-oriented InMemoryDbService.
// *
// * For demonstration purposes, it can return the database
// * synchronously as an object (default),
// * as an observable, or as a promise.
// *
// * Add the following line to `AppModule.imports`
// *   InMemoryWebApiModule.forRoot(HeroInMemDataService) // or HeroInMemDataOverrideService
// */
//import { Injectable } from '@angular/core';
//import { InMemoryDbService, RequestInfo } from '../app/in-mem/interfaces';

//// tslint:disable:no-unused-variable
//import { Observable, of }  from 'rxjs';
//import { delay } from 'rxjs/operators';
//// tslint:enable:no-unused-variable

//@Injectable()
//export class HeroInMemDataService implements InMemoryDbService {
//  createDb(reqInfo?: RequestInfo) {

//    const heroes = [
//      { id: 1, name: 'Windstorm' },
//      { id: 2, name: 'Bombasto' },
//      { id: 3, name: 'Magneta' },
//      { id: 4, name: 'Tornado' }
//    ];

//    const nobodies: any[] = [ ];

//    // entities with string ids that look like numbers
//    const stringers = [
//      { id: '10', name: 'Bob String'},
//      { id: '20', name: 'Jill String'}
//    ];

//    // default returnType
//    let returnType  = 'object';
//    // let returnType  = 'observable';
//    // let returnType  = 'promise';

//    // demonstrate POST commands/resetDb
//    // this example clears the collections if the request body tells it to do so
//    if (reqInfo) {
//      const body = reqInfo.utils.getJsonBody(reqInfo.req) || {};
//      if (body.clear === true) {
//        heroes.length = 0;
//        nobodies.length = 0;
//        stringers.length = 0;
//      }

//      // 'returnType` can be 'object' | 'observable' | 'promise'
//      returnType = body.returnType || 'object';
//    }
//    const db = { heroes, nobodies, stringers };

//    switch (returnType) {
//      case ('observable'):
//        return of(db).pipe(delay(10));
//      case ('promise'):
//        return new Promise(resolve => {
//          setTimeout(() => resolve(db), 10);
//        });
//      default:
//        return db;
//    }
//  }
//}
