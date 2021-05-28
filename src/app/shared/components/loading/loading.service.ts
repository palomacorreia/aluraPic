import { Injectable} from '@angular/core';
import { LoadingType} from './loading-type';
import { Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

@Injectable({ providedIn : 'root'})
export class LoadingService {
    show: boolean;
    loadingSubject = new Subject<boolean>();

    getLoading() {
        return this.loadingSubject.asObservable().
         pipe(startWith(false));
    }

    start() {
        this.loadingSubject.next(true);
    }

    stop() {
        this.loadingSubject.next(false);
    }
}