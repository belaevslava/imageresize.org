import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ImageResizePage from '../../pages/ImageResizePage/ImageResizePage';
import ImageBulkResizePage from '../../pages/ImageBulkResizePage/ImageBulkResizePage';
import ImageCompressPage from '../../pages/ImageCompressPage/ImageCompressPage';
import ImageFeaturesPage from '../../pages/ImageFeaturesPage/ImageFeaturesPage';
import PdfResizePage from '../../pages/PdfResizePage/PdfResizePage';
import PdfCompressPage from '../../pages/PdfCompressPage/PdfCompressPage';
import PdfMergePage from '../../pages/PdfMergePage/PdfMergePage';
import ConverterPage from '../../pages/ConverterPage/ConverterPage';
import FeatureCroppingPage from '../../pages/FeatureCroppingPage/FeatureCroppingPage';
import FeatureEditingPage from '../../pages/FeatureEditingPage/FeatureEditingPage';
import FeatureCompressingPage from '../../pages/FeatureCompressingPage/FeatureCompressingPage';
import TermsOfServicePage from '../../pages/TermsOfServicePage/TermsOfServicePage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const AppRouter = () => (
    <Switch>
        <Redirect path="/" exact={true} to="/image/resize" />
        <Route path="/image/resize" component={ImageResizePage} />
        <Route path="/image/bulk-resize" component={ImageBulkResizePage} />
        <Route path="/image/compress" component={ImageCompressPage} />
        <Route path="/image/features" component={ImageFeaturesPage} />

        <Route path="/pdf/resize" component={PdfResizePage} />
        <Route path="/pdf/compress" component={PdfCompressPage} />
        <Route path="/pdf/merge" component={PdfMergePage} />

        <Route path="/convert/jpg-to-pdf" component={ConverterPage} />
        <Route path="/convert/jpg-to-png" component={ConverterPage} />
        <Route path="/convert/pdf-to-jpg" component={ConverterPage} />
        <Route path="/convert/pdf-to-png" component={ConverterPage} />
        <Route path="/convert/png-to-jpg" component={ConverterPage} />
        <Route path="/convert/png-to-pdf" component={ConverterPage} />

        <Route path="/feature/cropping" component={FeatureCroppingPage} />
        <Route path="/feature/editing" component={FeatureEditingPage} />
        <Route path="/feature/compressing" component={FeatureCompressingPage} />

        <Route path="/terms-of-service" component={TermsOfServicePage} />
        <Route component={NotFoundPage} />
    </Switch>
)

export default AppRouter;