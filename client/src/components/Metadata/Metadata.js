import React from 'react';
import { PropTypes } from 'prop-types';
import { Helmet } from "react-helmet";

const Metadata = ({ url, title, description, imageUrl, imageAlt }) => {

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="twitter:image" content={imageUrl} />
      <meta property="twitter:image:alt" content={imageAlt} />
      <meta property="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}

Metadata.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string 
};
 
export default Metadata;