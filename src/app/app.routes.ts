import { Routes } from '@angular/router';
import { Docs } from './components/docs/docs';
import { Tuto } from './components/tuto/tuto';
import { Sandbox } from './components/sandbox/sandbox';
import { Intro } from './components/intro/intro';
import { Example } from './components/example/example';

export const routes: Routes = [
    { path: "docs", component: Docs },
    { path: "tutorials", component: Tuto },
    { path: "sandbox", component: Sandbox },
    { path: "intro", component: Intro },
    { path: "example", component: Example},
    { path: "", redirectTo: "intro", pathMatch: "full" },
    { path: "**", redirectTo: "intro" }
];
