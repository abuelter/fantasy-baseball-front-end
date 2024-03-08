import { Routes } from '@angular/router';
import { DraftBoardComponent } from './draft-board/draft-board.component';
import { ElementsContainerComponent } from './elements-container/elements-container.component';

export const routes: Routes = [
    { path: '', component: ElementsContainerComponent }
];
