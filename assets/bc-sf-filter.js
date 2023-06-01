// Override Settings
var productCounter = 0;

var bcSfFilterSettings = {
  general: {
      limit: bcSfFilterConfig.custom.products_per_page,
      // Optional
      loadProductFirst: false,
      styleScrollToTop: 'style2',
      defaultDisplay: bcSfFilterConfig.custom.layout,
      showPlaceholderProductList: true
  },
};

var bcSfFilterTemplate = {
  'soldOutClass': 'product-price--sold-out',

  // Grid Template
  'vendorGridHtml': '<div class="grid-view-item__vendor">{{itemVendorLabel}}</div>',
  'soldOutLabelGridHtml': ' <span class="product-price__sold-out">' + bcSfFilterConfig.label.sold_out + '</span>',
  'productGridItemHtml': '<div class="product-item product-item--default js-product js-product-item">' +
                              '<script class="bc-sf-filter-product-script js-product-item-object" data-id="bc-product-json-{{itemId}}" type="application/json">{{itemJson}}</script><script class="js-product-item-script" type="application/json">{{itemOptionValues}}</script><form method="post" action="/cart/add" accept-charset="UTF-8" class="form-product-small js-form-product-small" enctype="multipart/form-data"><input type="hidden" name="form_type" value="product" tabindex="0" class=""><input type="hidden" name="utf8" value="✓" tabindex="0" class="">' +
                                '<div class="product-item__select hidden">{{itemSelect}}</div>' +
                                '<div class="product-item__inner">' +
                                    '<div class="product-item__images"><a href="{{itemUrl}}" class="product-item__link">' +
                                    '{{backgroundVideo}}' +
                                    '<img class="product-item__image" loading="lazy" src="{{imageUrl}}" sizes="(max-width: 778px) 50vw, 30vw"' +
                                    'srcset="{{imageUrl_800w}} 800w, {{imageUrl_700w}} 700w, {{imageUrl_600w}} 600w, {{imageUrl_500w}} 500w, {{imageUrl_400w}} 400w, {{imageUrl_300w}} 300w,' +
                                    '{{imageUrl_200w}} 200w"></img>' +
                                    '{{hoverImageUrl}}</a></div>' +
                                    '<div class="product-item__content">' +
                                      '<div class="product-item__aside">' +
                                        '<div class="product-item__entry">' +
                                          '{{itemTags}}' +
                                          '{{itemLeft}}' +
                                        '</div>' +
                                        '<div class="product-item__variants">' +
                                          '{{itemVariants}}' +
                                        '</div>' +
                                      '</div>' +
                                      '<div class="product-item__bar">' +
                                        '<h5 class="heading-small product-item__title js-product-title">' +
                                            '<a href="{{itemUrl}}">' +
                                                '{{itemTitleNew}}' +
                                            '</a>' +
                                        '</h5>' +
                                        '<div class="price price--small price--grey product-item__price js-product-price">' +
                                            '{{itemPrice}}' +
                                        '</div>' +
                                      '</div>' +
                                    '</div>' +
                                '</div>' +
                              '</form>' +
                            '</div>{{metaItems}}',

  // List Template
  'vendorSmallListHtml': '<div class="list-view-item__vendor-column small--hide"><div class="list-view-item__vendor">{{itemVendorLabel}}</div></div>',
  'vendorMediumListHtml': '<div class="list-view-item__vendor medium-up--hide">{{itemVendorLabel}}</div>',
  'saleLabelListHtml': '<div class="list-view-item__on-sale">' + bcSfFilterConfig.label.sale + '</div>',
  'soldOutLabelListHtml': '<div class="list-view-item__sold-out">' + bcSfFilterConfig.label.sold_out + '</div>',
  'productListItemHtml':  '<li href="{{itemUrl}}" class="list-view-item">' +
                              '<div class="product-card product-card--list">' +
                                  '<div class="list-view-item__link">' +
                                      '<div class="list-view-item__image-column">' +
                                          '<div class="list-view-item__image-wrapper">' +
                                              '<img class="list-view-item__image" src="{{itemThumbUrl}}" alt="Ulla Johnson {{itemTitle}}">' +
                                          '</div>' +
                                      '</div>' +
                                      '<div class="list-view-item__title-column">' +
                                          '<div class="list-view-item__title">{{itemTitle}}</div>' +
                                          '{{itemSaleLabel}}' +
                                          '{{itemMediumVendor}}' +
                                          '{{itemSoldOutLabel}}' +
                                      '</div>' +
                                      '{{itemSmallVendor}}' +
                                      '<div class="list-view-item__price-column">{{itemPrice}}</div>' +
                                  '</div>' +
                              '</div>' +
                          '</li>',

  // Pagination Template
  'previousActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--tertiary btn--narrow"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 8 13" style="enable-background:new 0 0 8 13;" xml:space="preserve"><style type="text/css">.st0{opacity:0.9;}</style><desc>Created with Sketch.</desc><g id="Design" class="st0"><g id="PLP---Pagination" transform="translate(-815.000000, -3860.000000)"><polygon points="822,3860.2 822.7,3860.9 817.1,3866.5 822.7,3872.2 822,3872.9 815.6,3866.5     "/></g></g></svg></a></li>',
  'previousDisabledHtml': '<li><div class="btn btn--tertiary btn--narrow btn--disabled"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 8 13" style="enable-background:new 0 0 8 13;" xml:space="preserve"><style type="text/css">.st0{opacity:0.9;}</style><desc>Created with Sketch.</desc><g id="Design" class="st0"><g id="PLP---Pagination" transform="translate(-815.000000, -3860.000000)"><polygon points="822,3860.2 822.7,3860.9 817.1,3866.5 822.7,3872.2 822,3872.9 815.6,3866.5    "/></g></g></svg></div></li>',
  'nextActiveHtml': '<li><a href="{{itemUrl}}" class="btn btn--tertiary btn--narrow"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 8 13" style="enable-background:new 0 0 8 13;" xml:space="preserve"><style type="text/css">.st0{opacity:0.9;}</style><desc>Created with Sketch.</desc><g id="Design" class="st0"><g id="PLP---Pagination" transform="translate(-815.000000, -3860.000000)"><polygon points="816.4,3872.9 815.6,3872.2 821.3,3866.5 815.6,3860.9 816.4,3860.2 822.7,3866.5   "/></g></g></svg></a></li>',
  'nextDisabledHtml': '<li><div class="btn btn--tertiary btn--narrow btn--disabled"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 8 13" style="enable-background:new 0 0 8 13;" xml:space="preserve"><style type="text/css">.st0{opacity:0.9;}</style><desc>Created with Sketch.</desc><g id="Design" class="st0"><g id="PLP---Pagination" transform="translate(-815.000000, -3860.000000)"><polygon points="816.4,3872.9 815.6,3872.2 821.3,3866.5 815.6,3860.9 816.4,3860.2 822.7,3866.5   "/></g></g></svg></div></li>',
  'pageItemHtml': '<li><a href="{{itemUrl}}">{{itemTitle}}</a></li>',
  'pageItemSelectedHtml': '<li><span class="active">{{itemTitle}}</span></li>',
  'pageItemRemainHtml': '<li><span>{{itemTitle}}</span></li>',
  'paginateHtml': '<ul class="list--inline pagination clearfix">{{previous}}<li class="pagination__text">{{pageItems}}</li>{{next}}</ul>',

  // Sorting Template
  sortingHtml: '<span class="sort__head js-sort-head">' + bcSfFilterConfig.label.sorting + '</span><select class="sort__select js-sort-select">{{sortingItems}}</select><ul class="sort__body js-sort-body">{{sortingItemsList}}</ul>',
};

BCSfFilter.prototype.buildProductGridItem = function(data) {
  productCounter = productCounter + 1

  /*** Prepare data ***/
  var images = data.images_info;
  // Displaying price base on the policy of Shopify, have to multiple by 100
  var soldOut = !data.available; // Check a product is out of stock
  var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  var priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Get First Variant (selected_or_first_available_variant)
  var firstVariant = data['variants'][0];
  if (getParam('variant') !== null && getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  /*** End Prepare data ***/

  // Get Template
  var itemHtml = bcSfFilterTemplate.productGridItemHtml;

  // Add a specific class for grid item
  var itemGridWidthClass = '';
  var imageSize = '600x600';

  switch (bcSfFilterConfig.custom.products_per_row) {
    case 2:
      itemGridWidthClass = 'medium-up--one-half';
      imageSize = '540x600';
      break;
    case 3:
      itemGridWidthClass = 'small--one-half medium-up--one-third';
      imageSize = '345x550';
      break;
    case 4:
      itemGridWidthClass = 'small--one-half medium-up--one-quarter';
      imageSize = '250x';
      break;
    case 5:
      itemGridWidthClass = 'small--one-half medium-up--one-fifth';
      imageSize = '195x';
      break;
  }
  itemHtml = itemHtml.replace(/{{itemGridWidthClass}}/g, itemGridWidthClass);

  // Add soldOut class
  var itemSoldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
  itemHtml = itemHtml.replace(/{{itemSoldOutClass}}/g, itemSoldOutClass);

  // Add soldOut label
  var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelGridHtml : '';
  itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

  var imgId = 'ProductCardImage-' + data.id
  var wrapperId = 'ProductCardImageWrapper-' + data.id

  // Build background video
  if (data.media.length > 0 && data.media[0].mediaContentType != 'IMAGE' && Object.hasOwn(data.media[0], 'embeddedUrl')) {
    let videoHTML = ''

    let videoUrl = data.media[0].embeddedUrl.indexOf('/video') > -1 && data.media[0].embeddedUrl.indexOf('vimeo') > -1
      ? data.media[0].embeddedUrl.replace('/video', '')
      : data.media[0].embeddedUrl

    videoHTML = checkVideo(videoUrl, videoHTML, 1)
    itemHtml = itemHtml.replace(/{{backgroundVideo}}/g, videoHTML)
    itemHtml = itemHtml.replace(/{{hoverImageUrl}}/g, '')
  } else {
    itemHtml = itemHtml.replace(/{{backgroundVideo}}/g, '')
    // Hover Image
    var hoverImageHtml = '';

    if (data.images.length > 1) {
      hoverImageHtml = '<img class="product-item__image" loading="lazy" src="'+ bcsffilter.optimizeImage(Object.values(data.images[1])[0], '850x') + ')" sizes="(max-width: 780px) 50vw, 30vw"' +
      'srcset="' +
      bcsffilter.optimizeImage(Object.values(data.images[1])[0], '850x') + ' 800w,' +
      bcsffilter.optimizeImage(Object.values(data.images[1])[0], '700x') + ' 700w,' +
      bcsffilter.optimizeImage(Object.values(data.images[1])[0], '600x') + ' 600w,' +
      bcsffilter.optimizeImage(Object.values(data.images[1])[0], '500x') + ' 500w,' +
      bcsffilter.optimizeImage(Object.values(data.images[1])[0], '400x') + ' 400w,' +
      bcsffilter.optimizeImage(Object.values(data.images[1])[0], '300x') + ' 300w,' +
      bcsffilter.optimizeImage(Object.values(data.images[1])[0], '200x') + ' 200w' +
      '"></img>'
    }
    itemHtml = itemHtml.replace(/{{hoverImageUrl}}/g, hoverImageHtml)
  }


  // Build Image style
  var imageStyle = buildImageStyle(data);
  itemHtml = itemHtml.replace(/{{imageStyle}}/g, imageStyle);

  // Add Images
  var aspect_ratio = '';
  var itemImagesHtml = '<div id="' + wrapperId + '" class="grid-view-item__image-wrapper js">';
  itemImagesHtml += '<div style="padding-top:';
  if (images.length > 0) {
    aspect_ratio = images[0]['width'] / images[0]['height'];
    itemImagesHtml += 1 / aspect_ratio * 100;
  } else {
    itemImagesHtml += 100;
  }
  itemImagesHtml += '%;">';
  itemImagesHtml += '<img id="' + imgId + '" ' +
    'class="grid-view-item__image lazyload" ' +
    'src="' + this.getFeaturedImage(images, '300x300') + '" ' +
    'data-src="' + this.getFeaturedImage(images, '{width}x') + '" ' +
    'data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
    'data-aspectratio="' + aspect_ratio + '" ' +
    'data-sizes="auto" ' +
    'alt="Ulla Johnson {{itemTitle}}">';
  itemImagesHtml += '</div>';
  itemImagesHtml += '</div>';

  var image_size = bcSfFilterConfig.custom.max_height + 'x' + bcSfFilterConfig.custom.max_height;
  var max_width = images.length > 0 ? bcSfFilterConfig.custom.max_height * aspect_ratio : 0;
  itemImagesHtml += '<noscript><img class="grid-view-item__image" src="' + this.getFeaturedImage(images, image_size + '@2x') + '" alt="Ulla Johnson {{itemTitle}}" style="max-width: ' + max_width + 'px;"></noscript>';
  itemHtml = itemHtml.replace(/{{itemImages}}/g, itemImagesHtml);

  // Add Vendor
  var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorGridHtml : '';
  itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

  // Add Price
  var itemPriceHtml = buildPrice(data, onSale, priceVaries);
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

  // Add data json
  var self = this;
  var itemJson = {
    "id": data.id,
    "title": data.title,
    "handle": data.handle,
    "vendor": data.vendor,
    "variants": data.variants,
    "url": self.buildProductItemUrl(data),
    "options_with_values": data.options_with_values,
    "images": data.images,
    "available": data.available,
    "price_min": data.price_min,
    "price_max": data.price_max,
    "compare_at_price_min": data.compare_at_price_min,
    "compare_at_price_max": data.compare_at_price_max
  };
  itemHtml = itemHtml.replace(/{{itemJson}}/g, JSON.stringify(itemJson));

  // Custom
  // Add Variants
  var itemColorHtml = '';
  var itemVariantsHtml = '';
  var variantsHtml = '';
  var itemOptionValues = [];

  if (data.options_with_values.length) {
    for (var i = 0; i < data.options_with_values.length; i++) {
      var optionName = data.options_with_values[i].name;
      var optionHandle = handleize(optionName);
      var optionValues = data.options_with_values[i].values;
      var optionColorClass = '';
      var optionSizeClass = '';
      var optionSizeStyleClass = '';
      var variantValues = '';
      var valuesArr = [];
      var optionsObject = {};

      if (optionHandle === Shopify.variantColorHandle && optionValues.length > 0) {
        optionColorClass = ' js-dropdown-colors';
      }

      if (optionHandle === Shopify.variantSizeHandle && optionValues.length > 0) {
        optionSizeClass = ' js-dropdown-size';
        optionSizeStyleClass = ' dropdown-primary--size';
      }

      for (var x = 0; x < optionValues.length; x++) {
        var variantValue = optionValues[x].title;
        var variantValueHandle = handleize(variantValue);
        var selectedClass = '';
        valuesArr.push(variantValueHandle)

        if (optionHandle === Shopify.variantColorHandle && x === 0) {
          selectedClass = ' class="selected"'
          itemColorHtml = variantValue;
        }

        variantValues += '<li' + selectedClass + '><a href="#" class="dropdown__link" data-value-title="' + variantValue + '" data-value="' + variantValueHandle + '" data-option="' + (i + 1) + '" data-index="' + x + '" data-option-name="' + optionName + '" data-option-name-handle="' + optionHandle + '">' + variantValue + '</a></li>'
      }

      variantsHtml += '<div class="dropdown-primary' + optionSizeStyleClass + ' js-dropdown-options' + optionColorClass + optionSizeClass + '"><ul>' + variantValues + '</ul></div>'

      optionsObject = {
        "name": optionHandle,
        "position": i + 1,
        "values": valuesArr
      }

      itemOptionValues.push(optionsObject)
    }
  }

  if (variantsHtml !== '') {
    itemVariantsHtml = variantsHtml + '<button type="submit" class="product-item__btn js-product-btn hidden" name="add"></button>';
  }

  var itemTitleNewHtml = '<span>' + data.title + '</span>'

  if (itemTitleNewHtml.indexOf(Shopify.productTitleSpliiter) !== -1) {
    var itemTitleArr = itemTitleNewHtml.split(Shopify.productTitleSpliiter)
    itemTitleNewHtml = '<span>' + itemTitleArr[0] + ' </span><em>' + itemTitleArr[1] + '</em>'
  }

  itemHtml = itemHtml.replace(/{{itemTitleNew}}/g, itemTitleNewHtml);
  itemHtml = itemHtml.replace(/{{itemColor}}/g, itemColorHtml);
  itemHtml = itemHtml.replace(/{{itemVariants}}/g, itemVariantsHtml);
  itemHtml = itemHtml.replace(/{{itemOptionValues}}/g, JSON.stringify(itemOptionValues));

  // Product Item Select
  var selectHtml = '';
  var option = '';
  var selectVariants = data.variants;
  var priceHtml = '';
  var productQty = 0;
  var itemLeftHtml = '';
  var containsContinue = false

  for (var selectVariant = 0; selectVariant < selectVariants.length; selectVariant++) {
    var disabledOption = '';
    var selectedOption = '';
    var selectVariantCurrent = selectVariants[selectVariant];
    var selectVariantCompared = selectVariantCurrent.compare_at_price;
    var selectVariantPrice = selectVariantCurrent.price;
    var priceHtml = '';
    productQty += selectVariantCurrent.inventory_quantity

    if (selectVariantCurrent.inventory_policy == 'continue') {
      containsContinue = true
    }

    if (selectVariantCompared > selectVariantPrice) {
      priceHtml =
        '<del class=\'price__amount\'><span class=\'money flow-price\' ' +
        'flow-variant=\'' + selectVariantCurrent.id + '\' ' +
        'flow-selector=\'prices.compare_at.label\' ' +
        'flow-default=\'' + bcsffilter.formatMoney(selectVariantCompared) + '\'>' +
        bcsffilter.formatMoney(selectVariantCompared) +
        '</span></del><ins class=\'price__amount\'><span class=\'money flow-price\' ' +
        'flow-variant=\'' + selectVariantCurrent.id + '\' ' +
        'flow-selector=\'prices.item.label\' ' +
        'flow-default=\'' + bcsffilter.formatMoney(selectVariantPrice) + '\'>' +
        bcsffilter.formatMoney(selectVariantPrice) +
        '</span></ins>';
    } else {
      priceHtml =
        '<span class=\'price__amount\'><span class=\'money flow-price\' ' +
        'flow-variant=\'' + selectVariantCurrent.id + '\' ' +
        'flow-selector=\'prices.item.label\' ' +
        'flow-default=\'' + bcsffilter.formatMoney(selectVariantPrice) + '\'>' +
        bcsffilter.formatMoney(selectVariantPrice) +
        '</span></span>';
    }

    if (!selectVariantCurrent.available) {
      disabledOption = 'disabled';
    }

    if (selectVariant == 0) {
      selectedOption = 'selected';
    }

    var option2 = '';
    if (typeof selectVariantCurrent.options[1] != 'undefined') {
      option2 = selectVariantCurrent.options[1];
    }
    var option3 = '';
    if (typeof selectVariantCurrent.options[2] != 'undefined') {
      option3 = selectVariantCurrent.options[2];
    }

    option =
      option +
      '<option value="' +
      selectVariantCurrent.id +
      '" data-price="' +
      priceHtml +
      '" data-option-1="' +
      selectVariantCurrent.options[0] +
      '" data-option-2="' +
      option2 +
      '" data-option-3="' +
      option3 +
      '"' +
      disabledOption +
      ' ' +
      selectedOption +
      '>' +
      selectVariantCurrent.title +
      '</option>';
  }

  selectHtml =
    '<select name="id" class="product-single__variants js-select-global">' +
    option +
    '</select>';

  if (!containsContinue){
    if (productQty > 0 && productQty < parseInt(Shopify.collectionLeftNumber)) {
      itemLeftHtml = '<em>' + Shopify.onlyFewLeft + '</em>'
    } else if (productQty <= 0 && Shopify.outOfStock) {
      itemLeftHtml = '<em>' + Shopify.outOfStock + '</em>'
    }
  }

  itemHtml = itemHtml.replace(/{{itemSelect}}/g, selectHtml);
  itemHtml = itemHtml.replace(/{{itemLeft}}/g, itemLeftHtml);

  // Tags
  var itemTagsHtml = '';
  var itemTagHtml = '';

  for (var i = 0; i < data.tags.length; i++) {
    if (data.tags[i] == 'preorder') {
      itemTagHtml += '<small>' + Shopify.preorderText + '</small>';
    }

    if (data.tags[i].indexOf(Shopify.badge) !== -1) {
      itemTagHtml += '<small>' + data.tags[i].replace(Shopify.badge, '').trim() + '</small>';
    }
  }

  if (itemTagHtml != '') {
    itemTagsHtml = '<span>' + itemTagHtml + '</span>';
  }

  itemHtml = itemHtml.replace(/{{itemTags}}/g, itemTagsHtml);

  // Meta Product
  var metaItemsHtml = '';

  if (metaProducts.length > 0) {
    for (var i = 0; i < metaProducts.length; i++) {
      var metaProductPos = metaProducts[i].position
      var metaProductPosMobile = metaProducts[i].position_mobile
      var metaProductVideo = metaProducts[i].video
      var metaProductImage = metaProducts[i].image
      var metaProductType = metaProducts[i].type
      var metaProductURL = metaProducts[i].url
      var metaItemHtmlDesktop = '';
      var metaItemHtmlMobile = '';

      if (metaProductVideo !== '' || metaProductImage !== '') {
        if (metaProductPos === productCounter) {
          if (metaProductVideo !== '') {
            metaItemHtmlDesktop = checkVideo(metaProductVideo, metaItemHtmlDesktop, metaProductType)
          } else if (metaProductImage !== '') {
            if (metaProductType == 0) {
              metaItemHtmlDesktop = '<div class="product-item__bg product-item__bg--horizontal lazyload" data-bg="url(' + metaProductImage + ')"></div>'
            } else {
              metaItemHtmlDesktop = '<div class="product-item__bg product-item__bg--vertical lazyload" data-bg="url(' + metaProductImage + ')"></div>'
            }
          }

          if (metaItemHtmlDesktop !== '') {
            var classHidden = ''

            if (metaProductPos !== metaProductPosMobile && metaProductPosMobile > 0) {
              classHidden = 'hidden-xs'
            }

            if (metaProductURL != "") {
              if (metaProductType == 0) {
                metaItemsHtml += '<div class="product-item product-item--large ' + classHidden + '"><a href="' + metaProductURL + '" class="product-item__inner">' + metaItemHtmlDesktop + '</a></div>'
              } else {
                metaItemsHtml += '<div class="product-item product-item--default ' + classHidden + '"><a href="' + metaProductURL + '" class="product-item__inner">' + metaItemHtmlDesktop + '</a></div>'
              }
            } else {
              if (metaProductType == 0) {
                metaItemsHtml += '<div class="product-item product-item--large ' + classHidden + '"><div class="product-item__inner">' + metaItemHtmlDesktop + '</div></div>'
              } else {
                metaItemsHtml += '<div class="product-item product-item--default ' + classHidden + '"><div class="product-item__inner">' + metaItemHtmlDesktop + '</div></div>'
              }
            }
          }
        }

        if (metaProductPosMobile > 0 && metaProductPos !== metaProductPosMobile && metaProductPosMobile === productCounter) {
          if (metaProductVideo !== '') {
            metaItemHtmlMobile = checkVideo(metaProductVideo, metaItemHtmlMobile, metaProductType)
          } else if (metaProductImage !== '') {
            if (metaProductType == 0) {
              metaItemHtmlMobile = '<div class="product-item__bg product-item__bg--horizontal lazyload" data-bg="url(' + metaProductImage + ')"></div>'
            } else {
              metaItemHtmlMobile = '<div class="product-item__bg product-item__bg--vertical lazyload" data-bg="url(' + metaProductImage + ')"></div>'
            }
          }

          if (metaItemHtmlMobile !== '') {
            var classesHidden = ''

            if (metaProductPos !== metaProductPosMobile && metaProductPosMobile > 0) {
              classesHidden = 'hidden-sm hidden-md hidden-lg'
            }

            if (metaProductURL != "") {
              if (metaProductType == 0) {
                metaItemsHtml += '<div class="product-item product-item--large ' + classesHidden + '"><a href="' + metaProductURL + '" class="product-item__inner">' + metaItemHtmlMobile + '</a></div>'
              } else {
                metaItemsHtml += '<div class="product-item product-item--default ' + classesHidden + '"><a href="' + metaProductURL + '" class="product-item__inner">' + metaItemHtmlMobile + '</a></div>'
              }
            } else {
              if (metaProductType == 0) {
                metaItemsHtml += '<div class="product-item product-item--large ' + classesHidden + '"><div class="product-item__inner">' + metaItemHtmlMobile + '</div></div>'
              } else {
                metaItemsHtml += '<div class="product-item product-item--default ' + classesHidden + '"><div class="product-item__inner">' + metaItemHtmlMobile + '</div></div>'
              }
            }
          }
        }
      }
    }
  }

  itemHtml = itemHtml.replace(/{{metaItems}}/g, metaItemsHtml);

  // Add main attribute
  itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));
  itemHtml = itemHtml.replace(/{{imageUrl}}/g, this.getFeaturedImage(data.images, '850x'));
  itemHtml = itemHtml.replace(/{{imageUrl_800w}}/g, this.getFeaturedImage(data.images, '850x'));
  itemHtml = itemHtml.replace(/{{imageUrl_700w}}/g, this.getFeaturedImage(data.images, '700x'));
  itemHtml = itemHtml.replace(/{{imageUrl_600w}}/g, this.getFeaturedImage(data.images, '600x'));
  itemHtml = itemHtml.replace(/{{imageUrl_500w}}/g, this.getFeaturedImage(data.images, '500x'));
  itemHtml = itemHtml.replace(/{{imageUrl_400w}}/g, this.getFeaturedImage(data.images, '400x'));
  itemHtml = itemHtml.replace(/{{imageUrl_300w}}/g, this.getFeaturedImage(data.images, '300x'));
  itemHtml = itemHtml.replace(/{{imageUrl_200w}}/g, this.getFeaturedImage(data.images, '200x'));
  return itemHtml;
}

function checkVideo(metaProductVideo, metaItemHtml, metaProductType) {
  if (metaProductVideo.indexOf('youtu') !== -1) {
    var regExpYoutube = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/;
    var metaProductVideoId = metaProductVideo.match(regExpYoutube);
    if (metaProductVideoId && metaProductVideoId[2].length == 11) {
      if (metaProductType == 0) {
        metaItemHtml = '<div class="product-item__bg product-item__bg--horizontal product-item__bg--video"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + metaProductVideoId[2] + '?autoplay=1&mute=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="video-iframe-blocker"></div></div>'
      } else {
        metaItemHtml = '<div class="product-item__bg product-item__bg--vertical product-item__bg--video"><iframe width="560" height="315" src="https://www.youtube.com/embed/' + metaProductVideoId[2] + '?autoplay=1&mute=1&controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div class="video-iframe-blocker"></div></div>'
      }
    }
  } else if (metaProductVideo.indexOf('vimeo.com/') !== -1) {
    var vimeoVideoSrc = metaProductVideo.split('vimeo.com/')[1].split('/')[0];

    if (metaProductType == 0) {
      metaItemHtml = '<div class="product-item__bg product-item__bg--horizontal product-item__bg--video"><iframe src="https://player.vimeo.com/video/' + vimeoVideoSrc + '?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&quality=720p" width="640" height="889" frameborder="0" allow="autoplay; fullscreen" webkitallowfullscreen allowfullscreen></iframe><div class="video-iframe-blocker"></div></div>'
    } else {
      metaItemHtml = '<div class="product-item__bg product-item__bg--vertical product-item__bg--video"><iframe src="https://player.vimeo.com/video/' + vimeoVideoSrc + '?autoplay=1&loop=1&muted=1&background=1&title=0&byline=0&portrait=0&quality=720p" width="640" height="889" frameborder="0" allow="autoplay; fullscreen" webkitallowfullscreen allowfullscreen></iframe><div class="video-iframe-blocker"></div></div>'
    }
  }

  return metaItemHtml
}

// Build Image style
function buildImageStyle(data) {
  var images = data.images_info;
  var imgId = 'ProductCardImage-' + data.id;
  var wrapperId = 'ProductCardImageWrapper-' + data.id;
  var imageStyle = '';
  if (images.length > 0) {
    var image = images[0];
    var width = bcSfFilterConfig.custom.max_height;
    var height = bcSfFilterConfig.custom.max_height;
    var aspect_ratio = image.width / image.height;
    var small_style = true;
    var container_aspect_ratio = width * 1.0 / height;

    if (image.aspect_ratio < 1.0) {
      var maximum_width = height * aspect_ratio;
      if (image.height <= height) {
        var maximum_height = image.height;
        maximum_width = image.width;
      } else {
        var maximum_height = height;
      }
    } else if (aspect_ratio < container_aspect_ratio) {
      var maximum_height = height / aspect_ratio;
      if (image.height <= height) {
        var maximum_height = image.height;
        var maximum_width = image.width;
      } else {
        var maximum_height = height;
        var maximum_width = height * aspect_ratio;
      }
    } else {
      var maximum_height = height / aspect_ratio;
      if (image.width <= width) {
        maximum_height = image.height;
        var maximum_width = image.width
      } else {
        var maximum_width = width;
        maximum_height = maximum_width / aspect_ratio;
      }
    }

    imageStyle += '<style>';
    if (small_style) imageStyle += '@media screen and (min-width: 750px) {';
    imageStyle += '#' + imgId + ' {' +
      'max-width: ' + maximum_width + 'px;' +
      'max-height: ' + maximum_height + 'px;' +
      '}' +
      '#' + wrapperId + ' {' +
      'max-width: ' + maximum_width + 'px;' +
      'max-height: ' + maximum_height + 'px;' +
      '}';
    if (small_style) imageStyle += '}';

    if (small_style) {
      if (aspect_ratio < 1) {
        maximum_width = 750 * aspect_ratio;
      } else {
        if (image.width < 750) {
          maximum_width = image.width;
        } else {
          maximum_width = 750;
        }
      }
      imageStyle += '@media screen and (max-width: 749px) {'
      imageStyle += '#' + imgId + ' {' +
        'max-width: ' + maximum_width + 'px;' +
        'max-height: 750px;' +
        '}' +
        '#' + wrapperId + ' {' +
        'max-width: ' + maximum_width + 'px;' +
        '}';
      imageStyle += '}';
    }
    imageStyle += '</style>';
  }
  return imageStyle;
}

BCSfFilter.prototype.buildProductListItem = function(data) {
  /*** Prepare data ***/
  var images = data.images_info;
  // Displaying price base on the policy of Shopify, have to multiple by 100
  var soldOut = !data.available; // Check a product is out of stock
  var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
  var priceVaries = data.price_min != data.price_max; // Check a product has many prices
  // Get First Variant (selected_or_first_available_variant)
  var firstVariant = data['variants'][0];
  if (getParam('variant') !== null && getParam('variant') != '') {
    var paramVariant = data.variants.filter(function(e) {
      return e.id == getParam('variant');
    });
    if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
  } else {
    for (var i = 0; i < data['variants'].length; i++) {
      if (data['variants'][i].available) {
        firstVariant = data['variants'][i];
        break;
      }
    }
  }
  /*** End Prepare data ***/

  // Get Template
  var itemHtml = bcSfFilterTemplate.productListItemHtml;

  // Add onSale label
  var itemSaleLabel = onSale ? bcSfFilterTemplate.saleLabelListHtml : '';
  itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabel);

  // Add soldOut label
  var itemSoldOutLabel = soldOut ? bcSfFilterTemplate.soldOutLabelListHtml : '';
  itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabel);

  // Add Thumbnail
  var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src'], '600x600') : bcSfFilterConfig.general.no_image_url;
  itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

  // Add Vendor
  var itemSmallVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorSmallListHtml : '';
  itemHtml = itemHtml.replace(/{{itemSmallVendor}}/g, itemSmallVendorHtml);
  var itemMediumVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorMediumListHtml : '';
  itemHtml = itemHtml.replace(/{{itemMediumVendor}}/g, itemMediumVendorHtml);

  // Add Price
  var itemPriceHtml = buildPrice(data, onSale, priceVaries);
  itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

  // Add main attribute
  itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
  itemHtml = itemHtml.replace(/{{itemVendorLabel}}/g, data.vendor);
  itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

  return itemHtml;
}

function handleize(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\u00C0-\u024f]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace('_', '-');
}

function buildPrice(data, onSale, priceVaries) {
  var firstVariant = data['variants'][0];
  var priceHtml = '';
  if (onSale) {
      priceHtml +=
        '<del class="price__amount"><span class="money flow-price" ' +
        'flow-variant="' + firstVariant.id + '" ' +
        'flow-selector="prices.compare_at.label" ' +
        'flow-default="' + bcsffilter.formatMoney(firstVariant.compare_at_price) + '">' +
        bcsffilter.formatMoney(firstVariant.compare_at_price) +
        '</span></del> ';
      priceHtml +=
        '<ins class="price__amount"><span class="money flow-price" ' +
        'flow-variant="' + firstVariant.id + '" ' +
        'flow-selector="prices.item.label" ' +
        'flow-default="' + bcsffilter.formatMoney(firstVariant.price) + '">' +
        bcsffilter.formatMoney(firstVariant.price) +
        '</span></ins>';
    } else {
      /*if (priceVaries) {
        priceHtml += bcSfFilterConfig.label_basic.from + ' ';
      }*/
      priceHtml +=
        '<span class="price__amount"><span class="money flow-price" ' +
        'flow-variant="' + firstVariant.id + '" ' +
        'flow-selector="prices.item.label" ' +
        'flow-default="' + bcsffilter.formatMoney(firstVariant.price) + '">' +
        bcsffilter.formatMoney(firstVariant.price) +
        '</span></span>';
    }
    priceHtml += '';

  return priceHtml;
}

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
  // Get page info
  var currentPage = parseInt(this.queryParams.page);
  var totalPage = Math.ceil(totalProduct / this.queryParams.limit);
  // If it has only one page, clear Pagination
  if (totalPage == 1) {
    jQ(this.selector.pagination).html('');
    return false;
  }
  if (this.getSettingValue('general.paginationType') == 'default') {
    var paginationHtml = bcSfFilterTemplate.paginateHtml;
    // Build Previous
    var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
    previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
    paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);
    // Build Next
    var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml : bcSfFilterTemplate.nextDisabledHtml;
    nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
    paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);
    // Create page items array
    var beforeCurrentPageArr = [];
    for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
      beforeCurrentPageArr.unshift(iBefore);
    }
    if (currentPage - 4 > 0) {
      beforeCurrentPageArr.unshift('...');
    }
    if (currentPage - 4 >= 0) {
      beforeCurrentPageArr.unshift(1);
    }
    beforeCurrentPageArr.push(currentPage);
    var afterCurrentPageArr = [];
    for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
      afterCurrentPageArr.push(iAfter);
    }
    if (currentPage + 3 < totalPage) {
      afterCurrentPageArr.push('...');
    }
    if (currentPage + 3 <= totalPage) {
      afterCurrentPageArr.push(totalPage);
    }
    // Build page items
    var pageItemsHtml = '';
    var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
    for (var iPage = 0; iPage < pageArr.length; iPage++) {
      if (pageArr[iPage] == '...') {
        pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
      } else {
        pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
      }
      pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
      pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
    }
    paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);
    jQ(this.selector.pagination).html(paginationHtml);
  }
};

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
  if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
    jQ(this.selector.topSorting).html('');

    var sortingArr = this.getSortingList();
    if (sortingArr) {
      // Build content
      var paramSort = this.queryParams.sort || '';
      var sortingItemsHtml = '';
      var sortingListHtml = '';

      for (var k in sortingArr) {
        activeClass = '';

        if (paramSort == k) {
          activeClass = 'selected';
        }

        sortingItemsHtml += '<option value="' + k + '">' + sortingArr[k] + '</option>';
        sortingListHtml += '<li class="' + activeClass + '"><a href="#" data-sort="' + k + '">' + sortingArr[k] + '</a></li>'
      }
      var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml).replace(/{{sortingItemsList}}/g, sortingListHtml);
      jQ(this.selector.topSorting).html(html);

      // Set current value
      jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
    }
  }
};

// Build Display type
BCSfFilter.prototype.buildFilterDisplayType = function() {
  var itemHtml = '<span>View As </span>';
  itemHtml += '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="bc-sf-filter-display-item bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><span class="fallback-text">Grid view</span></span></a>';
  itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="bc-sf-filter-display-item bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><span class="fallback-text">List view</span></span></a>';
  jQ(this.selector.topDisplayType).html(itemHtml);

  // Active current display type
  jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
  jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
  if (this.queryParams.display == 'list') {
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
  } else if (this.queryParams.display == 'grid') {
    jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
  }
};

var firstVariantIds = [];
var checkLocalizedVariantsInterval = null;
// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {
    /* start-initialize-bc-al */
    var self = this;
    var alEnable = true;
    if(self.getSettingValue('actionlist.qvEnable') != '' || self.getSettingValue('actionlist.atcEnable') != ''){
      alEnable = self.getSettingValue('actionlist.qvEnable') || self.getSettingValue('actionlist.atcEnable');
    }
    if (alEnable === true && typeof BCActionList !== 'undefined') {
        if (typeof bcActionList === 'undefined') {
            bcActionList = new BCActionList();
        }else{
          if (typeof bcAlParams !== 'undefined' && typeof bcSfFilterParams !== 'undefined') {
              bcActionList.initFlag = false;
              bcActionList.alInit(bcSfFilterParams, bcAlParams);
          } else {
              bcActionList.alInit();
          }
        }
    }
    /* end-initialize-bc-al */
  var productSelector = jQ(this.selector.products);
  if (this.queryParams.display == 'list') {
    if (productSelector.children('.list-view-items').length == 0) {
      productSelector.children().wrapAll('ul class="list-view-items"/>');
    }
    productSelector.removeClass('grid grid--uniform grid--view-items');
  } else {
    if (productSelector.children('.list-view-items').length > 0) {
      productSelector.children('.list-view-items').children().unwrap();
    }
    productSelector.addClass('grid grid--uniform grid--view-items');
  }

  data.forEach(function(item){
    firstVariantIds.push(item.selected_or_first_available_variant.id);
  });

  setSavedTop();
  window.onpageshow = function(event) {
    if (event.persisted) {
      setSavedTop();
    }
  };
  checkLocalizedVariantsInterval = setInterval(checkLocalizedVariants, 500);
};

function checkLocalizedVariants() {
  if(typeof Flow !== 'undefined' && typeof jQ !== 'undefined') {
    Flow.set('on', 'ready', function () {
      const variantOptions = {
        variants: firstVariantIds, // List of variant ids to load
        experience: window.Flow.getExperience(), // Limits results by Flow experience key
        success: (status, variants) => {
          Flow.variants.localize({ force: true });
        },
        error: (status, error) => {
          console.log(status, error), // Error callback
          jQ('.js-product-price .money').removeClass('flow-price');
        }
      };

      //load variants into Flow cache
      if(firstVariantIds.length > 0) {
        Flow.variants.load(variantOptions);
      }
    });

    clearInterval(checkLocalizedVariantsInterval);
  }
}

/* Back Navigation on PLP */
  function setCookie(key, value, expiry=1) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (expiry * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
  }

  function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
  }

  function eraseCookie(key) {
    setCookie(key, '');
  }
  function setSavedTop () {
    if (window.location.pathname.indexOf('/collections/') !== -1) {
      if (savedTop() > 0) {
        jQ(document).scrollTop(savedTop())
        sessionStorage.setItem('collectionPos', '');
      }
    }
  }

  function getScrollData () {
    var colPos = sessionStorage.getItem('collectionPos')
    if ((typeof colPos !== 'undefined') &&
        (colPos !== null) &&
        (colPos !== '') &&
        isJson(colPos)) {
      return JSON.parse(colPos)
    } else {
      return {}
    }
  }

  function savedTop () {
    var object = getScrollData()
    if (typeof object[getHandle(window.location.pathname)] !== 'undefined') {
      return object[getHandle(window.location.pathname)]
    } else {
      return 0
    }
  }

  function getWindowPos () {
    return jQ(document).scrollTop() - 30 // Rough offset to account for browser address bars
  }

  function getHandle (string) {
    if (typeof string !== 'undefined') {
      return string.replace(/[^a-zA-Z0-9]/g, ' ').trim().replace(/[^a-zA-Z0-9]/g, '_')
    } else {
      return ''
    }
  }

  function isJson (str) {
    try {
      JSON.parse(str)
    } catch (e) {
      return false
    }
    return true
  }

  BCSfFilter.prototype.buildProductListData = function(a, b) {
    ("default" == this.getSettingValue("general.paginationType") || "default" != this.getSettingValue("general.paginationType") && "page" != b) && (jQ(this.getSelector("products")).html(""), jQ(window).unbind("scroll"));
    productCounter = (this.queryParams.page - 1) * this.queryParams.limit
    for (var c = "", d = a.length, e = 0; e < d; e++) {
        switch (this.queryParams.display) {
            case "list":
                var f = this.buildProductListItem(a[e], e + 1, d);
                break;
            case "collage":
                var f = this.buildProductCollageItem(a[e], e + 1, d);
                break;
            default:
                var f = this.buildProductGridItem(a[e], e + 1, d)
        }
        c += this.buildProductItemAdvanced(a[e], f)
    }
    jQ(this.getSelector("products")).append(c)
  }

// Build Additional Elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
  var totalProduct = '';
  if (data.total_product == 1) {
    totalProduct = bcSfFilterConfig.label.items_with_cou
    totalProduct = bcSfFilterConfig.label.items_with_count_one.replace(/{{ count }}/g, data.total_product);
  } else {
    totalProduct = bcSfFilterConfig.label.items_with_count_other.replace(/{{ count }}/g, data.total_product);
  }
  jQ('#bc-sf-filter-total-product').html(totalProduct);

  // Counter Reset
  //productCounter = 0

  // Custom Work
  var $filter = jQ('.js-filter')

  // Result Items
  var $resultsElement = $filter.find('.js-filter-title span');
  if ($resultsElement.length) {
    var totalProductsHtml = Shopify.collectionNumberItems.replace('{{ number }}', data.total_product)
    if (data.total_product !== 1) {
      totalProductsHtml = totalProductsHtml.replace(')', 's)')
    }

    $resultsElement.text(totalProductsHtml);
  }


  // Lazy Load
  var myLazyLoad = new LazyLoad({
    elements_selector: '.lazyload'
  });

  // Trigger Click
  if (jQuery('.js-dropdown-options li.selected .dropdown__link:not(.dropdown__link--redirect)').length) {
    jQuery('.js-dropdown-options li.selected .dropdown__link:not(.dropdown__link--redirect)').trigger('click')
  }

  // Filter Custom
  var $filterTree = $filter.find('#bc-sf-filter-tree')
  var $filterDropdowns = $filterTree.find('.bc-sf-filter-option-block')

  // Swatch Labels
  var $swatchBlocks = $filterTree.find('.bc-sf-filter-option-block-swatch:not([data-select-type="multiple"])');

  if ($swatchBlocks.length) {
    $swatchBlocks.each(function() {
      var selectedSwatchHtml = '';
      var $swatchBlock = jQ(this);
      var $swatchSelected = $swatchBlock.find('.selected');

      if ($swatchSelected.length) {
        var swatchSelectedTitle = $swatchSelected.attr('title')

        if (swatchSelectedTitle.indexOf('|') !== -1) {
          var swatchSelectedFirst = swatchSelectedTitle.split('|')[0]
          var swatchSelectedLast = swatchSelectedTitle.split('|')[1]

          swatchSelectedTitle = '<strong>' + swatchSelectedFirst + '</strong><em>' + swatchSelectedLast + '</em>'
        }

        selectedSwatchHtml = '<small> ' + swatchSelectedTitle + '</small>'
      }

      if ($swatchBlock.find('.bc-sf-filter-block-title h3 span').length) {
        $swatchBlock.find('.bc-sf-filter-block-title h3 span').append(selectedSwatchHtml)
      }
    })
  }

  // Filter Grouping
  if (filterGroups.length && $filterTree.length && $filterDropdowns.length) {
    if ($filter.find('.js-filter-blocks').length) {
      $filter.find('.js-filter-blocks').remove()
    }

    for (var i = 0; i < filterGroups.length; i++) {
      var newIdx = i + 1
      var filterGroup = filterGroups[i]
      var filterGroupTitle = filterGroup.title
      var filterGroupFilters = filterGroup.filters
      var filterFlag = false;
      var expandedClass = '';
      var hideBlocksBody = '';

      if ($filter.attr('data-filter-block-index-' + newIdx + '') !== undefined) {
        expandedClass = ' expanded';
        hideBlocksBody = ' style="display: block;"';
      }

      for (var y = 0; y < filterGroupFilters.length; y++) {
        var filterSingle = filterGroupFilters[y].trim()

        $filterDropdowns.each(function() {
          var dropdownTitle = jQ(this).data('title')

          if (filterSingle === dropdownTitle) {
            if (!filterFlag) {
              $filterTree.parent().append('<div class="filter__blocks js-filter-blocks js-filter-blocks-' + newIdx + expandedClass + '"><div class="filter__blocks-head js-filter-blocks-head"><span>' + filterGroupTitle + '</span></div><div class="filter__blocks-body js-filter-blocks-body"' + hideBlocksBody + '></div></div>');
            }

            filterFlag = true;

            jQ(this)
              .addClass('hidden')
              .clone()
              .addClass('cloned')
              .removeClass('hidden')
              .appendTo($filterTree.parent().find('.js-filter-blocks-' + newIdx + '').find('.js-filter-blocks-body'))
          }
        })
      }
    }
  }

  /* Counter Items */
  var $selectedItem = jQ('.bc-sf-filter-selected-items .selected-item');
  var $list = jQ('.js-selected-items');
  var newSelectedItems = '';

  if ($selectedItem.length) {
    $selectedItem.each(function() {
      var $this = jQ(this);
      var selectedVal = $this.find('.selected-type strong').text();

      if (selectedVal.indexOf('|') !== -1) {
        selectedVal = selectedVal.split('|')[0]
      }

      newSelectedItems += '<li><span><strong>' + selectedVal + '</strong><small class="btn-close btn-close--reset"></small></span></li>';
    });

  }

  if ($list.length) {
    $list.html(newSelectedItems);
  }

  // Sort
  var $sortBody = jQ('.js-sort .js-sort-body')
  if ($sortBody.length && $sortBody.closest('.js-sort').hasClass('expanded')) {
    $sortBody.show()
  }
};

// Build Default layout
BCSfFilter.prototype.buildDefaultElements=function(){var isiOS=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,isSafari=/Safari/.test(navigator.userAgent),isBackButton=window.performance&&window.performance.navigation&&2==window.performance.navigation.type;if(!(isiOS&&isSafari&&isBackButton)){var self=this,url=window.location.href.split("?")[0],searchQuery=self.isSearchPage()&&self.queryParams.hasOwnProperty("q")?"&q="+self.queryParams.q:"";window.location.replace(url+"?view=bc-original"+searchQuery)}};

BCSfFilter.prototype.prepareProductData = function(data) { var countData = data.length; for (var k = 0; k < countData; k++) { data[k]['images'] = data[k]['images_info']; if (data[k]['images'].length > 0) { data[k]['featured_image'] = data[k]['images'][0] } else { data[k]['featured_image'] = { src: bcSfFilterConfig.general.no_image_url, width: '', height: '', aspect_ratio: 0 } } data[k]['url'] = '/products/' + data[k].handle; var optionsArr = []; var countOptionsWithValues = data[k]['options_with_values'].length; for (var i = 0; i < countOptionsWithValues; i++) { optionsArr.push(data[k]['options_with_values'][i]['name']) } data[k]['options'] = optionsArr; if (typeof bcSfFilterConfig.general.currencies != 'undefined' && bcSfFilterConfig.general.currencies.length > 1) { var currentCurrency = bcSfFilterConfig.general.current_currency.toLowerCase().trim(); function updateMultiCurrencyPrice(oldPrice, newPrice) { if (typeof newPrice != 'undefined') { return newPrice; } return oldPrice; } data[k].price_min = updateMultiCurrencyPrice(data[k].price_min, data[k]['price_min_' + currentCurrency]); data[k].price_max = updateMultiCurrencyPrice(data[k].price_max, data[k]['price_max_' + currentCurrency]); data[k].compare_at_price_min = updateMultiCurrencyPrice(data[k].compare_at_price_min, data[k]['compare_at_price_min_' + currentCurrency]); data[k].compare_at_price_max = updateMultiCurrencyPrice(data[k].compare_at_price_max, data[k]['compare_at_price_max_' + currentCurrency]); } data[k]['price_min'] *= 100, data[k]['price_max'] *= 100, data[k]['compare_at_price_min'] *= 100, data[k]['compare_at_price_max'] *= 100; data[k]['price'] = data[k]['price_min']; data[k]['compare_at_price'] = data[k]['compare_at_price_min']; data[k]['price_varies'] = data[k]['price_min'] != data[k]['price_max']; var firstVariant = data[k]['variants'][0]; if (getParam('variant') !== null && getParam('variant') != '') { var paramVariant = data[k]['variants'].filter(function(e) { return e.id == getParam('variant') }); if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0] } else { var countVariants = data[k]['variants'].length; for (var i = 0; i < countVariants; i++) { if (data[k]['variants'][i].available) { firstVariant = data[k]['variants'][i]; break } } } data[k]['selected_or_first_available_variant'] = firstVariant; var countVariants = data[k]['variants'].length; for (var i = 0; i < countVariants; i++) { var variantOptionArr = []; var count = 1; var variant = data[k]['variants'][i]; var variantOptions = variant['merged_options']; if (Array.isArray(variantOptions)) { var countVariantOptions = variantOptions.length; for (var j = 0; j < countVariantOptions; j++) { var temp = variantOptions[j].split(':'); data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1]; data[k]['variants'][i]['option_' + temp[0]] = temp[1]; variantOptionArr.push(temp[1]) } data[k]['variants'][i]['options'] = variantOptionArr } data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100; data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100 } data[k]['description'] = data[k]['content'] = data[k]['body_html']; if(data[k].hasOwnProperty('original_tags') && data[k]['original_tags'].length > 0){ data[k].tags = data[k]['original_tags'].slice(0); }} return data };
