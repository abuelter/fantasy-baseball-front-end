import { Routes } from '@angular/router';
import { DraftBoardComponent } from './draft-board/draft-board.component';
import { ElementsContainerComponent } from './elements-container/elements-container.component';
import { SetTiersComponent } from './set-tiers/set-tiers.component';
import { SetRanksComponent } from './set-ranks/set-ranks.component';

export const routes: Routes = [
    { path: '', component: ElementsContainerComponent },
    { path: 'tiers', component: SetTiersComponent },
    { path: 'rankings', component: SetRanksComponent}
];
