/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react";
export function onRenderBody({
    setHeadComponents,
    setPreBodyComponents,
    setBodyAttributes,
    setPostBodyComponents
}) {
    setHeadComponents([
        <script
            key="xpostbody01"
            type="text/javascript"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=406944066536664&autoLogAppEvents=1"
            async
            defer
            crossorigin="anonymous"
        />        
    ]);

    setPreBodyComponents([]);

    setBodyAttributes([
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5e6a0f6a419ca078"></script>

    ]);
}
