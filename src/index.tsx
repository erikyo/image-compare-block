import {registerBlockType} from "@wordpress/blocks";
import {useBlockProps, useInnerBlocksProps} from '@wordpress/block-editor';
import {ToggleControl} from "@wordpress/components";
import {InnerBlocks} from "@wordpress/block-editor";

import './style.scss';

registerBlockType('codekraft/image-compare-block', {
  title: 'Compare Images',
  icon: 'format-image',
  category: 'common',
  attributes: {
    showFirstImage: {
      type: 'boolean',
      default: true,
    },
  },
  edit: function (props) {
    const { attributes, setAttributes } = props;
    const { showFirstImage } = attributes;

    return (
      <div { ...useBlockProps() }>
        <ToggleControl
          label="Show First Image"
          checked={showFirstImage}
          onChange={(newVal) => setAttributes({ showFirstImage: newVal })}
        />
        <div className="image-compare-block">
          <InnerBlocks
            { ...useInnerBlocksProps()}
            allowedBlocks={['core/image']}
            templateLock="all"
            template={[
              ['core/image', { align: 'full', className: 'first' + (showFirstImage ? ' visible' : '') }],
              ['core/image', { align: 'full', className: 'second' + (!showFirstImage ? ' visible' : '') }],
            ]}
          />
        </div>
      </div>
    );
  },
  save: function () {
    return (
      <div { ...useBlockProps.save() }>
        <InnerBlocks.Content />
      </div>
    );
  },
});
