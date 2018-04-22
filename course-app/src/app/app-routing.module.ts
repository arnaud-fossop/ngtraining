import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { ShoppingComponent } from "./shopping/shopping.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { RecipeDetailComponent } from "./recipe-book/recipe-detail.component";
import { RecipeDetailInfoTextComponent } from "./recipe-book/recipe-detail-info-text.component";
import { RecipeEditComponent } from "./recipe-book/recipe-edit/recipe-edit.component";


const appRoutes: Routes = [
    { path: '', redirectTo: 'shopping', pathMatch: 'full'},
    { path: 'shopping', component: ShoppingComponent},
    { path: 'recipes', component: RecipeBookComponent, 
        children: [
            { path: '', component: RecipeDetailInfoTextComponent},
            { path: 'new', component: RecipeEditComponent},
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent}
        ]
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}