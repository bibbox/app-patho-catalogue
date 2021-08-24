import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EditBitstreamPageComponent } from './edit-bitstream-page/edit-bitstream-page.component';
import { AuthenticatedGuard } from '../core/auth/authenticated.guard';
import { BitstreamPageResolver } from './bitstream-page.resolver';
import { BitstreamDownloadPageComponent } from '../shared/bitstream-download-page/bitstream-download-page.component';
import { ResourcePolicyTargetResolver } from '../shared/resource-policies/resolvers/resource-policy-target.resolver';
import { ResourcePolicyCreateComponent } from '../shared/resource-policies/create/resource-policy-create.component';
import { ResourcePolicyResolver } from '../shared/resource-policies/resolvers/resource-policy.resolver';
import { ResourcePolicyEditComponent } from '../shared/resource-policies/edit/resource-policy-edit.component';
import { BitstreamAuthorizationsComponent } from './bitstream-authorizations/bitstream-authorizations.component';

const EDIT_BITSTREAM_PATH = ':id/edit';
const EDIT_BITSTREAM_AUTHORIZATIONS_PATH = ':id/authorizations';

/**
 * Routing module to help navigate Bitstream pages
 */
@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path:':id/download',
        component: BitstreamDownloadPageComponent,
        resolve: {
          bitstream: BitstreamPageResolver
        },
      },
      {
        path: EDIT_BITSTREAM_PATH,
        component: EditBitstreamPageComponent,
        resolve: {
          bitstream: BitstreamPageResolver
        },
        canActivate: [AuthenticatedGuard]
      },
      {
        path: EDIT_BITSTREAM_AUTHORIZATIONS_PATH,

        children: [
          {
            path: 'create',
            resolve: {
              resourcePolicyTarget: ResourcePolicyTargetResolver
            },
            component: ResourcePolicyCreateComponent,
            data: { title: 'resource-policies.create.page.title', showBreadcrumbs: true }
          },
          {
            path: 'edit',
            resolve: {
              resourcePolicy: ResourcePolicyResolver
            },
            component: ResourcePolicyEditComponent,
            data: { title: 'resource-policies.edit.page.title', showBreadcrumbs: true }
          },
          {
            path: '',
            resolve: {
              bitstream: BitstreamPageResolver
            },
            component: BitstreamAuthorizationsComponent,
            data: { title: 'bitstream.edit.authorizations.title', showBreadcrumbs: true }
          }
        ]
      }
    ])
  ],
  providers: [
    BitstreamPageResolver,
  ]
})
export class BitstreamPageRoutingModule {
}