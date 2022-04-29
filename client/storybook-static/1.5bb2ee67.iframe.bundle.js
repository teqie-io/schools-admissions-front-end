;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    './node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/blocks/index.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.r(__webpack_exports__),
        __webpack_require__.d(__webpack_exports__, 'ColorPalette', function () {
          return ColorPalette.b
        }),
        __webpack_require__.d(__webpack_exports__, 'ColorItem', function () {
          return ColorPalette.a
        }),
        __webpack_require__.d(__webpack_exports__, 'IconGallery', function () {
          return IconGallery.a
        }),
        __webpack_require__.d(__webpack_exports__, 'IconItem', function () {
          return IconGallery.b
        }),
        __webpack_require__.d(__webpack_exports__, 'Typeset', function () {
          return Typeset.a
        }),
        __webpack_require__.d(__webpack_exports__, 'anchorBlockIdFromId', function () {
          return anchorBlockIdFromId
        }),
        __webpack_require__.d(__webpack_exports__, 'Anchor', function () {
          return Anchor_Anchor
        }),
        __webpack_require__.d(__webpack_exports__, 'extractComponentArgTypes', function () {
          return ArgsTable_extractComponentArgTypes
        }),
        __webpack_require__.d(__webpack_exports__, 'getComponent', function () {
          return ArgsTable_getComponent
        }),
        __webpack_require__.d(__webpack_exports__, 'StoryTable', function () {
          return ArgsTable_StoryTable
        }),
        __webpack_require__.d(__webpack_exports__, 'ComponentsTable', function () {
          return ArgsTable_ComponentsTable
        }),
        __webpack_require__.d(__webpack_exports__, 'ArgsTable', function () {
          return blocks_ArgsTable_ArgsTable
        }),
        __webpack_require__.d(__webpack_exports__, 'SourceState', function () {
          return SourceState
        }),
        __webpack_require__.d(__webpack_exports__, 'Canvas', function () {
          return Canvas_Canvas
        }),
        __webpack_require__.d(__webpack_exports__, 'DescriptionType', function () {
          return DescriptionType
        }),
        __webpack_require__.d(__webpack_exports__, 'getDescriptionProps', function () {
          return Description_getDescriptionProps
        }),
        __webpack_require__.d(__webpack_exports__, 'Description', function () {
          return Description_DescriptionContainer
        }),
        __webpack_require__.d(__webpack_exports__, 'DocsContext', function () {
          return DocsContext
        }),
        __webpack_require__.d(__webpack_exports__, 'DocsPage', function () {
          return DocsPage_DocsPage
        }),
        __webpack_require__.d(__webpack_exports__, 'DocsContainer', function () {
          return DocsContainer_DocsContainer
        }),
        __webpack_require__.d(__webpack_exports__, 'DocsStory', function () {
          return DocsStory_DocsStory
        }),
        __webpack_require__.d(__webpack_exports__, 'Heading', function () {
          return Heading_Heading
        }),
        __webpack_require__.d(__webpack_exports__, 'Meta', function () {
          return Meta
        }),
        __webpack_require__.d(__webpack_exports__, 'Preview', function () {
          return Preview_Preview
        }),
        __webpack_require__.d(__webpack_exports__, 'Primary', function () {
          return Primary_Primary
        }),
        __webpack_require__.d(__webpack_exports__, 'Props', function () {
          return Props
        }),
        __webpack_require__.d(__webpack_exports__, 'getSourceProps', function () {
          return Source_getSourceProps
        }),
        __webpack_require__.d(__webpack_exports__, 'Source', function () {
          return Source_Source
        }),
        __webpack_require__.d(__webpack_exports__, 'SourceContext', function () {
          return SourceContext
        }),
        __webpack_require__.d(__webpack_exports__, 'SourceContainer', function () {
          return SourceContainer_SourceContainer
        }),
        __webpack_require__.d(__webpack_exports__, 'Stories', function () {
          return Stories_Stories
        }),
        __webpack_require__.d(__webpack_exports__, 'storyBlockIdFromId', function () {
          return storyBlockIdFromId
        }),
        __webpack_require__.d(__webpack_exports__, 'lookupStoryId', function () {
          return Story_lookupStoryId
        }),
        __webpack_require__.d(__webpack_exports__, 'getStoryId', function () {
          return Story_getStoryId
        }),
        __webpack_require__.d(__webpack_exports__, 'getStoryProps', function () {
          return getStoryProps
        }),
        __webpack_require__.d(__webpack_exports__, 'Story', function () {
          return Story_Story
        }),
        __webpack_require__.d(__webpack_exports__, 'Subheading', function () {
          return Subheading_Subheading
        }),
        __webpack_require__.d(__webpack_exports__, 'Subtitle', function () {
          return Subtitle_Subtitle
        }),
        __webpack_require__.d(__webpack_exports__, 'extractTitle', function () {
          return extractTitle
        }),
        __webpack_require__.d(__webpack_exports__, 'Title', function () {
          return Title_Title
        }),
        __webpack_require__.d(__webpack_exports__, 'Wrapper', function () {
          return Wrapper_Wrapper
        }),
        __webpack_require__.d(__webpack_exports__, 'CURRENT_SELECTION', function () {
          return CURRENT_SELECTION
        }),
        __webpack_require__.d(__webpack_exports__, 'PRIMARY_STORY', function () {
          return PRIMARY_STORY
        }),
        __webpack_require__.d(__webpack_exports__, 'assertIsFn', function () {
          return assertIsFn
        }),
        __webpack_require__.d(__webpack_exports__, 'AddContext', function () {
          return mdx_AddContext
        }),
        __webpack_require__.d(__webpack_exports__, 'CodeOrSourceMdx', function () {
          return mdx_CodeOrSourceMdx
        }),
        __webpack_require__.d(__webpack_exports__, 'AnchorMdx', function () {
          return mdx_AnchorMdx
        }),
        __webpack_require__.d(__webpack_exports__, 'HeaderMdx', function () {
          return mdx_HeaderMdx
        }),
        __webpack_require__.d(__webpack_exports__, 'HeadersMdx', function () {
          return HeadersMdx
        })
      var ColorPalette = __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/ColorPalette.js'),
        IconGallery = __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/IconGallery.js'),
        Typeset = __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/Typeset.js'),
        react = __webpack_require__('./node_modules/react/index.js'),
        react_default = __webpack_require__.n(react),
        anchorBlockIdFromId = function anchorBlockIdFromId(storyId) {
          return 'anchor--'.concat(storyId)
        },
        Anchor_Anchor = function Anchor(_ref) {
          var storyId = _ref.storyId,
            children = _ref.children
          return react_default.a.createElement('div', { id: anchorBlockIdFromId(storyId) }, children)
        },
        mapValues =
          (__webpack_require__('./node_modules/core-js/modules/es.array.includes.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.includes.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.find.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.values.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.description.js'),
          __webpack_require__('./node_modules/core-js/modules/es.object.to-string.js'),
          __webpack_require__('./node_modules/core-js/modules/es.symbol.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/web.dom-collections.iterator.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.slice.js'),
          __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.from.js'),
          __webpack_require__('./node_modules/lodash/mapValues.js')),
        mapValues_default = __webpack_require__.n(mapValues),
        ArgsTable_ArgsTable = __webpack_require__(
          './node_modules/@storybook/components/dist/esm/blocks/ArgsTable/ArgsTable.js'
        ),
        TabbedArgsTable = __webpack_require__(
          './node_modules/@storybook/components/dist/esm/blocks/ArgsTable/TabbedArgsTable.js'
        ),
        esm = __webpack_require__('./node_modules/@storybook/addons/dist/esm/index.js'),
        filterArgTypes = __webpack_require__('./node_modules/@storybook/store/dist/esm/filterArgTypes.js'),
        dist_esm = __webpack_require__('./node_modules/@storybook/core-events/dist/esm/index.js'),
        global_window = __webpack_require__('./node_modules/global/window.js'),
        window_default = __webpack_require__.n(global_window)
      void 0 === global_window.window.__DOCS_CONTEXT__ &&
        ((global_window.window.__DOCS_CONTEXT__ = Object(react.createContext)({})),
        (global_window.window.__DOCS_CONTEXT__.displayName = 'DocsContext'))
      var DocsContext = global_window.window.__DOCS_CONTEXT__,
        CURRENT_SELECTION = '.',
        PRIMARY_STORY = '^',
        getComponentName =
          (__webpack_require__('./node_modules/core-js/modules/es.array.join.js'),
          __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.split.js'),
          __webpack_require__('./node_modules/core-js/modules/es.regexp.exec.js'),
          function getComponentName(component) {
            if (component)
              return 'string' == typeof component
                ? component.includes('-')
                  ? (function titleCase(str) {
                      return str
                        .split('-')
                        .map(function (part) {
                          return part.charAt(0).toUpperCase() + part.slice(1)
                        })
                        .join('')
                    })(component)
                  : component
                : component.__docgenInfo && component.__docgenInfo.displayName
                ? component.__docgenInfo.displayName
                : component.name
          })
      function scrollToElement(element) {
        var block = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'start'
        element.scrollIntoView({ behavior: 'smooth', block: block, inline: 'nearest' })
      }
      __webpack_require__('./node_modules/core-js/modules/es.promise.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.concat.js')
      var react_dist_esm = __webpack_require__('./node_modules/@mdx-js/react/dist/esm.js'),
        blocks_Story = __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/Story.js'),
        components_dist_esm = __webpack_require__('./node_modules/@storybook/components/dist/esm/index.js'),
        dist = __webpack_require__('./node_modules/@storybook/csf/dist/index.js')
      __webpack_require__('./node_modules/regenerator-runtime/runtime.js')
      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg),
            value = info.value
        } catch (error) {
          return void reject(error)
        }
        info.done ? resolve(value) : Promise.resolve(value).then(_next, _throw)
      }
      function _slicedToArray(arr, i) {
        return (
          (function _arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function _iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function _unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return _arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return _arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function _nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function _arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      function useStory(storyId, context) {
        var stories = useStories([storyId], context)
        return stories && stories[0]
      }
      function useStories(storyIds, context) {
        var initialStoriesById = context.componentStories().reduce(function (acc, story) {
            return (acc[story.id] = story), acc
          }, {}),
          _useState2 = _slicedToArray(Object(react.useState)(initialStoriesById), 2),
          storiesById = _useState2[0],
          setStories = _useState2[1]
        return (
          Object(react.useEffect)(function () {
            Promise.all(
              storyIds.map(
                (function () {
                  var _ref = (function _asyncToGenerator(fn) {
                    return function () {
                      var self = this,
                        args = arguments
                      return new Promise(function (resolve, reject) {
                        var gen = fn.apply(self, args)
                        function _next(value) {
                          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value)
                        }
                        function _throw(err) {
                          asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err)
                        }
                        _next(void 0)
                      })
                    }
                  })(
                    regeneratorRuntime.mark(function _callee(storyId) {
                      var story
                      return regeneratorRuntime.wrap(function _callee$(_context) {
                        for (;;)
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              return (_context.next = 2), context.loadStory(storyId)
                            case 2:
                              ;(story = _context.sent),
                                setStories(function (current) {
                                  return current[storyId] === story
                                    ? current
                                    : Object.assign(
                                        {},
                                        current,
                                        ((value = story),
                                        (key = storyId) in (obj = {})
                                          ? Object.defineProperty(obj, key, {
                                              value: value,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                            })
                                          : (obj[key] = value),
                                        obj)
                                      )
                                  var obj, key, value
                                })
                            case 4:
                            case 'end':
                              return _context.stop()
                          }
                      }, _callee)
                    })
                  )
                  return function (_x) {
                    return _ref.apply(this, arguments)
                  }
                })()
              )
            )
          }),
          storyIds.map(function (storyId) {
            return storiesById[storyId]
          })
        )
      }
      function Story_slicedToArray(arr, i) {
        return (
          (function Story_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function Story_iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function Story_unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return Story_arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return Story_arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function Story_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function Story_arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var storyBlockIdFromId = function storyBlockIdFromId(storyId) {
          return 'story--'.concat(storyId)
        },
        Story_lookupStoryId = function lookupStoryId(storyName, _ref) {
          var mdxStoryNameToKey = _ref.mdxStoryNameToKey,
            mdxComponentAnnotations = _ref.mdxComponentAnnotations
          return Object(dist.toId)(
            mdxComponentAnnotations.id || mdxComponentAnnotations.title,
            Object(dist.storyNameFromExport)(mdxStoryNameToKey[storyName])
          )
        },
        Story_getStoryId = function getStoryId(props, context) {
          var id = props.id,
            name = props.name
          return (id === CURRENT_SELECTION ? context.id : id) || Story_lookupStoryId(name, context)
        },
        getStoryProps = function getStoryProps(_ref4, story, context, onStoryFnCalled) {
          var height = _ref4.height,
            inline = _ref4.inline,
            storyName = story.name,
            parameters = story.parameters,
            _parameters$docs = parameters.docs,
            docs = void 0 === _parameters$docs ? {} : _parameters$docs
          if (docs.disable) return null
          var _docs$inlineStories = docs.inlineStories,
            inlineStories = void 0 !== _docs$inlineStories && _docs$inlineStories,
            _docs$iframeHeight = docs.iframeHeight,
            iframeHeight = void 0 === _docs$iframeHeight ? 100 : _docs$iframeHeight,
            prepareForInline = docs.prepareForInline,
            storyIsInline = 'boolean' == typeof inline ? inline : inlineStories
          if (storyIsInline && !prepareForInline)
            throw new Error(
              "Story '".concat(
                storyName,
                "' is set to render inline, but no 'prepareForInline' function is implemented in your docs configuration!"
              )
            )
          var boundStoryFn = function boundStoryFn() {
            var storyResult = story.unboundStoryFn(
              Object.assign({}, context.getStoryContext(story), {
                loaded: {},
                abortSignal: void 0,
                canvasElement: void 0
              })
            )
            return onStoryFnCalled(), storyResult
          }
          return Object.assign(
            {
              inline: storyIsInline,
              id: story.id,
              height: height || (storyIsInline ? void 0 : iframeHeight),
              title: storyName
            },
            storyIsInline && {
              parameters: parameters,
              storyFn: function storyFn() {
                return prepareForInline(boundStoryFn, context.getStoryContext(story))
              }
            }
          )
        }
      function makeGate() {
        var open
        return [
          new Promise(function (r) {
            open = r
          }),
          open
        ]
      }
      var Story_Story = function Story(props) {
        var context = Object(react.useContext)(DocsContext),
          channel = esm.a.getChannel(),
          storyRef = Object(react.useRef)(),
          storyId = Story_getStoryId(props, context),
          story = useStory(storyId, context),
          _useState2 = Story_slicedToArray(Object(react.useState)(!0), 2),
          showLoader = _useState2[0],
          setShowLoader = _useState2[1]
        Object(react.useEffect)(
          function () {
            var cleanup
            if (story && storyRef.current) {
              var componentId = story.componentId,
                id = story.id,
                title = story.title,
                name = story.name,
                renderContext = {
                  componentId: componentId,
                  title: title,
                  kind: title,
                  id: id,
                  name: name,
                  story: name,
                  showMain: function showMain() {},
                  showError: function showError() {},
                  showException: function showException() {}
                }
              ;(cleanup = context.renderStoryToElement({
                story: story,
                renderContext: renderContext,
                element: storyRef.current,
                viewMode: 'docs'
              })),
                setShowLoader(!1)
            }
            return function () {
              return cleanup && cleanup()
            }
          },
          [story]
        )
        var _makeGate2 = Story_slicedToArray(makeGate(), 2),
          storyFnRan = _makeGate2[0],
          onStoryFnRan = _makeGate2[1],
          _makeGate4 = Story_slicedToArray(makeGate(), 2),
          rendered = _makeGate4[0],
          onRendered = _makeGate4[1]
        if ((Object(react.useEffect)(onRendered), !story)) return react_default.a.createElement(blocks_Story.b, null)
        var storyProps = getStoryProps(props, story, context, onStoryFnRan)
        if (!storyProps) return null
        if (storyProps.inline) {
          var _global$FEATURES
          if (
            null !== window_default.a &&
            void 0 !== window_default.a &&
            null !== (_global$FEATURES = window_default.a.FEATURES) &&
            void 0 !== _global$FEATURES &&
            _global$FEATURES.modernInlineRender
          ) {
            var height = storyProps.height
            return react_default.a.createElement(
              'div',
              { id: storyBlockIdFromId(story.id) },
              react_default.a.createElement(
                react_dist_esm.a,
                { components: components_dist_esm.resetComponents },
                height
                  ? react_default.a.createElement(
                      'style',
                      null,
                      '#story--'
                        .concat(story.id, ' { min-height: ')
                        .concat(height, '; transform: translateZ(0); overflow: auto }')
                    )
                  : null,
                showLoader && react_default.a.createElement(blocks_Story.b, null),
                react_default.a.createElement('div', {
                  ref: storyRef,
                  'data-name': story.name,
                  dangerouslySetInnerHTML: { __html: '<span></span>' }
                })
              )
            )
          }
          Promise.all([storyFnRan, rendered]).then(function () {
            channel.emit(dist_esm.default.STORY_RENDERED, storyId)
          })
        }
        return react_default.a.createElement(
          'div',
          { id: storyBlockIdFromId(story.id) },
          react_default.a.createElement(
            react_dist_esm.a,
            { components: components_dist_esm.resetComponents },
            react_default.a.createElement(blocks_Story.a, storyProps)
          )
        )
      }
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          _extends.apply(this, arguments)
        )
      }
      function ArgsTable_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        )
      }
      function ArgsTable_slicedToArray(arr, i) {
        return (
          (function ArgsTable_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function ArgsTable_iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function ArgsTable_unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return ArgsTable_arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return ArgsTable_arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function ArgsTable_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function ArgsTable_arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      Story_Story.defaultProps = { children: null, name: null }
      var ArgsTable_extractComponentArgTypes = function extractComponentArgTypes(component, _ref, include, exclude) {
          var id = _ref.id,
            extractArgTypes = ((0, _ref.storyById)(id).parameters.docs || {}).extractArgTypes
          if (!extractArgTypes) throw new Error(ArgsTable_ArgsTable.b.ARGS_UNSUPPORTED)
          var argTypes = extractArgTypes(component)
          return (argTypes = Object(filterArgTypes.a)(argTypes, include, exclude))
        },
        ArgsTable_isShortcut = function isShortcut(value) {
          return value && [CURRENT_SELECTION, PRIMARY_STORY].includes(value)
        },
        ArgsTable_getComponent = function getComponent() {
          var props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            _ref3 = arguments.length > 1 ? arguments[1] : void 0,
            id = _ref3.id,
            storyById = _ref3.storyById,
            _ref4 = props,
            of = _ref4.of,
            _ref5 = props,
            story = _ref5.story,
            _storyById2 = storyById(id),
            component = _storyById2.component
          if (ArgsTable_isShortcut(of) || ArgsTable_isShortcut(story)) return component || null
          if (!of) throw new Error(ArgsTable_ArgsTable.b.NO_COMPONENT)
          return of
        },
        ArgsTable_addComponentTabs = function addComponentTabs(tabs, components, context, include, exclude, sort) {
          return Object.assign(
            {},
            tabs,
            mapValues_default()(components, function (comp) {
              return { rows: ArgsTable_extractComponentArgTypes(comp, context, include, exclude), sort: sort }
            })
          )
        },
        ArgsTable_StoryTable = function StoryTable(props) {
          var context = Object(react.useContext)(DocsContext),
            currentId = context.id,
            componentStories = context.componentStories,
            storyName = props.story,
            component = props.component,
            subcomponents = props.subcomponents,
            showComponent = props.showComponent,
            include = props.include,
            exclude = props.exclude,
            sort = props.sort
          try {
            var storyId
            switch (storyName) {
              case CURRENT_SELECTION:
                storyId = currentId
                break
              case PRIMARY_STORY:
                storyId = componentStories()[0].id
                break
              default:
                storyId = Story_lookupStoryId(storyName, context)
            }
            var story = useStory(storyId, context),
              _useArgs = (function useArgs(storyId, context) {
                var channel = esm.a.getChannel(),
                  story = context.storyById(storyId)
                if (!story) throw new Error('Unknown story: '.concat(storyId))
                var storyContext = context.getStoryContext(story),
                  _useState2 = ArgsTable_slicedToArray(Object(react.useState)(storyContext.args), 2),
                  args = _useState2[0],
                  setArgs = _useState2[1]
                return (
                  Object(react.useEffect)(
                    function () {
                      var cb = function cb(changed) {
                        changed.storyId === storyId && setArgs(changed.args)
                      }
                      return (
                        channel.on(dist_esm.default.STORY_ARGS_UPDATED, cb),
                        function () {
                          return channel.off(dist_esm.default.STORY_ARGS_UPDATED, cb)
                        }
                      )
                    },
                    [storyId]
                  ),
                  [
                    args,
                    Object(react.useCallback)(
                      function (updatedArgs) {
                        return channel.emit(dist_esm.default.UPDATE_STORY_ARGS, {
                          storyId: storyId,
                          updatedArgs: updatedArgs
                        })
                      },
                      [storyId]
                    ),
                    Object(react.useCallback)(
                      function (argNames) {
                        return channel.emit(dist_esm.default.RESET_STORY_ARGS, { storyId: storyId, argNames: argNames })
                      },
                      [storyId]
                    )
                  ]
                )
              })(storyId, context),
              _useArgs2 = ArgsTable_slicedToArray(_useArgs, 3),
              args = _useArgs2[0],
              updateArgs = _useArgs2[1],
              resetArgs = _useArgs2[2]
            if (!story)
              return react_default.a.createElement(ArgsTable_ArgsTable.a, {
                isLoading: !0,
                updateArgs: updateArgs,
                resetArgs: resetArgs
              })
            var argTypes = Object(filterArgTypes.a)(story.argTypes, include, exclude),
              mainLabel = getComponentName(component) || 'Story',
              tabs = ArgsTable_defineProperty({}, mainLabel, {
                rows: argTypes,
                args: args,
                updateArgs: updateArgs,
                resetArgs: resetArgs
              }),
              storyHasArgsWithControls =
                argTypes &&
                Object.values(argTypes).find(function (v) {
                  return !(null == v || !v.control)
                })
            if (
              (storyHasArgsWithControls || ((updateArgs = null), (resetArgs = null), (tabs = {})),
              !component ||
                (storyHasArgsWithControls && !showComponent) ||
                (tabs = ArgsTable_addComponentTabs(
                  tabs,
                  ArgsTable_defineProperty({}, mainLabel, component),
                  context,
                  include,
                  exclude
                )),
              subcomponents)
            ) {
              if (Array.isArray(subcomponents))
                throw new Error(
                  'Unexpected subcomponents array. Expected an object whose keys are tab labels and whose values are components.'
                )
              tabs = ArgsTable_addComponentTabs(tabs, subcomponents, context, include, exclude)
            }
            return react_default.a.createElement(TabbedArgsTable.a, { tabs: tabs, sort: sort })
          } catch (err) {
            return react_default.a.createElement(ArgsTable_ArgsTable.a, { error: err.message })
          }
        },
        ArgsTable_ComponentsTable = function ComponentsTable(props) {
          var context = Object(react.useContext)(DocsContext),
            components = props.components,
            include = props.include,
            exclude = props.exclude,
            sort = props.sort,
            tabs = ArgsTable_addComponentTabs({}, components, context, include, exclude)
          return react_default.a.createElement(TabbedArgsTable.a, { tabs: tabs, sort: sort })
        },
        blocks_ArgsTable_ArgsTable = function ArgsTable(props) {
          var context = Object(react.useContext)(DocsContext),
            id = context.id,
            _storyById3 = (0, context.storyById)(id),
            controls = _storyById3.parameters.controls,
            subcomponents = _storyById3.subcomponents,
            _ref6 = props,
            include = _ref6.include,
            exclude = _ref6.exclude,
            components = _ref6.components,
            sortProp = _ref6.sort,
            storyName = props.story,
            sort = sortProp || (null == controls ? void 0 : controls.sort),
            main = ArgsTable_getComponent(props, context)
          if (storyName)
            return react_default.a.createElement(
              ArgsTable_StoryTable,
              _extends({}, props, { component: main, subcomponents: subcomponents, sort: sort })
            )
          if (!components && !subcomponents) {
            var mainProps
            try {
              mainProps = { rows: ArgsTable_extractComponentArgTypes(main, context, include, exclude) }
            } catch (err) {
              mainProps = { error: err.message }
            }
            return react_default.a.createElement(ArgsTable_ArgsTable.a, _extends({}, mainProps, { sort: sort }))
          }
          if (components)
            return react_default.a.createElement(
              ArgsTable_ComponentsTable,
              _extends({}, props, { components: components, sort: sort })
            )
          var mainLabel = getComponentName(main)
          return react_default.a.createElement(
            ArgsTable_ComponentsTable,
            _extends({}, props, {
              components: Object.assign(ArgsTable_defineProperty({}, mainLabel, main), subcomponents),
              sort: sort
            })
          )
        }
      blocks_ArgsTable_ArgsTable.defaultProps = { of: CURRENT_SELECTION }
      __webpack_require__('./node_modules/core-js/modules/es.array.filter.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js')
      var Preview = __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/Preview.js'),
        fast_deep_equal = __webpack_require__('./node_modules/fast-deep-equal/index.js'),
        fast_deep_equal_default = __webpack_require__.n(fast_deep_equal),
        shared = __webpack_require__(
          './node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/shared.js'
        )
      function SourceContainer_slicedToArray(arr, i) {
        return (
          (function SourceContainer_arrayWithHoles(arr) {
            if (Array.isArray(arr)) return arr
          })(arr) ||
          (function SourceContainer_iterableToArrayLimit(arr, i) {
            if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(arr))) return
            var _arr = [],
              _n = !0,
              _d = !1,
              _e = void 0
            try {
              for (
                var _s, _i = arr[Symbol.iterator]();
                !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), !i || _arr.length !== i);
                _n = !0
              );
            } catch (err) {
              ;(_d = !0), (_e = err)
            } finally {
              try {
                _n || null == _i.return || _i.return()
              } finally {
                if (_d) throw _e
              }
            }
            return _arr
          })(arr, i) ||
          (function SourceContainer_unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return SourceContainer_arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return SourceContainer_arrayLikeToArray(o, minLen)
          })(arr, i) ||
          (function SourceContainer_nonIterableRest() {
            throw new TypeError(
              'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function SourceContainer_arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var SourceContext = Object(react.createContext)({ sources: {} }),
        SourceContainer_SourceContainer = function SourceContainer(_ref) {
          var children = _ref.children,
            _useState2 = SourceContainer_slicedToArray(Object(react.useState)({}), 2),
            sources = _useState2[0],
            setSources = _useState2[1],
            channel = esm.a.getChannel()
          return (
            Object(react.useEffect)(function () {
              var handleSnippetRendered = function handleSnippetRendered(id, newItem) {
                newItem !== sources[id] &&
                  setSources(function (current) {
                    var newSources = Object.assign(
                      {},
                      current,
                      (function SourceContainer_defineProperty(obj, key, value) {
                        return (
                          key in obj
                            ? Object.defineProperty(obj, key, {
                                value: value,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                              })
                            : (obj[key] = value),
                          obj
                        )
                      })({}, id, newItem)
                    )
                    return fast_deep_equal_default()(current, newSources) ? current : newSources
                  })
              }
              return (
                channel.on(shared.a, handleSnippetRendered),
                function () {
                  return channel.off(shared.a, handleSnippetRendered)
                }
              )
            }),
            react_default.a.createElement(SourceContext.Provider, { value: { sources: sources } }, children)
          )
        },
        blocks_Source = __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/Source.js'),
        esm_parameters =
          (__webpack_require__('./node_modules/core-js/modules/es.string.replace.js'),
          __webpack_require__('./node_modules/@storybook/store/dist/esm/parameters.js'))
      function _toConsumableArray(arr) {
        return (
          (function _arrayWithoutHoles(arr) {
            if (Array.isArray(arr)) return enhanceSource_arrayLikeToArray(arr)
          })(arr) ||
          (function _iterableToArray(iter) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter)) return Array.from(iter)
          })(arr) ||
          (function enhanceSource_unsupportedIterableToArray(o, minLen) {
            if (!o) return
            if ('string' == typeof o) return enhanceSource_arrayLikeToArray(o, minLen)
            var n = Object.prototype.toString.call(o).slice(8, -1)
            'Object' === n && o.constructor && (n = o.constructor.name)
            if ('Map' === n || 'Set' === n) return Array.from(o)
            if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
              return enhanceSource_arrayLikeToArray(o, minLen)
          })(arr) ||
          (function _nonIterableSpread() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
      function enhanceSource_arrayLikeToArray(arr, len) {
        ;(null == len || len > arr.length) && (len = arr.length)
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]
        return arr2
      }
      var SourceState,
        extract = function extract(targetId, _ref) {
          var source = _ref.source,
            locationsMap = _ref.locationsMap
          if (!locationsMap) return source
          var location =
            locationsMap[
              (function storyIdToSanitizedStoryName(id) {
                return id.replace(/^.*?--/, '')
              })(targetId)
            ]
          return location
            ? (function extractSource(location, lines) {
                var start = location.startBody,
                  end = location.endBody
                if (start.line === end.line && void 0 !== lines[start.line - 1])
                  return lines[start.line - 1].substring(start.col, end.col)
                var startLine = lines[start.line - 1],
                  endLine = lines[end.line - 1]
                return void 0 === startLine || void 0 === endLine
                  ? null
                  : [startLine.substring(start.col)]
                      .concat(_toConsumableArray(lines.slice(start.line, end.line - 1)), [
                        endLine.substring(0, end.col)
                      ])
                      .join('\n')
              })(location, source.split('\n'))
            : source
        }
      !(function (SourceState) {
        ;(SourceState.OPEN = 'open'), (SourceState.CLOSED = 'closed'), (SourceState.NONE = 'none')
      })(SourceState || (SourceState = {}))
      var Source_getSnippet = function getSnippet(snippet, story) {
          var _parameters$docs,
            _parameters$docs$sour,
            _parameters$docs2,
            _parameters$docs2$sou,
            _enhanced$docs,
            _enhanced$docs$source
          if (!story) return snippet
          var _parameters$docs3,
            _parameters$docs3$tra,
            _parameters$docs4,
            _parameters$docs4$tra,
            parameters = story.parameters,
            isArgsStory = parameters.__isArgsStory,
            type =
              (null === (_parameters$docs = parameters.docs) ||
              void 0 === _parameters$docs ||
              null === (_parameters$docs$sour = _parameters$docs.source) ||
              void 0 === _parameters$docs$sour
                ? void 0
                : _parameters$docs$sour.type) || shared.b.AUTO,
            userCode =
              null === (_parameters$docs2 = parameters.docs) ||
              void 0 === _parameters$docs2 ||
              null === (_parameters$docs2$sou = _parameters$docs2.source) ||
              void 0 === _parameters$docs2$sou
                ? void 0
                : _parameters$docs2$sou.code
          if (void 0 !== userCode) return userCode
          if (type === shared.b.DYNAMIC)
            return (
              (null === (_parameters$docs3 = parameters.docs) ||
              void 0 === _parameters$docs3 ||
              null === (_parameters$docs3$tra = _parameters$docs3.transformSource) ||
              void 0 === _parameters$docs3$tra
                ? void 0
                : _parameters$docs3$tra.call(_parameters$docs3, snippet, story)) || snippet
            )
          if (type === shared.b.AUTO && snippet && isArgsStory)
            return (
              (null === (_parameters$docs4 = parameters.docs) ||
              void 0 === _parameters$docs4 ||
              null === (_parameters$docs4$tra = _parameters$docs4.transformSource) ||
              void 0 === _parameters$docs4$tra
                ? void 0
                : _parameters$docs4$tra.call(_parameters$docs4, snippet, story)) || snippet
            )
          var enhanced =
            (function enhanceSource(story) {
              var _docs$source,
                id = story.id,
                parameters = story.parameters,
                storySource = parameters.storySource,
                _parameters$docs = parameters.docs,
                docs = void 0 === _parameters$docs ? {} : _parameters$docs,
                transformSource = docs.transformSource
              if (
                null == storySource ||
                !storySource.source ||
                (null !== (_docs$source = docs.source) && void 0 !== _docs$source && _docs$source.code)
              )
                return null
              var input = extract(id, storySource),
                code = transformSource ? transformSource(input, story) : input
              return { docs: Object(esm_parameters.a)(docs, { source: { code: code } }) }
            })(story) || parameters
          return (
            (null == enhanced ||
            null === (_enhanced$docs = enhanced.docs) ||
            void 0 === _enhanced$docs ||
            null === (_enhanced$docs$source = _enhanced$docs.source) ||
            void 0 === _enhanced$docs$source
              ? void 0
              : _enhanced$docs$source.code) || ''
          )
        },
        Source_getSourceProps = function getSourceProps(props, docsContext, sourceContext) {
          var currentId = docsContext.id,
            parameters = (0, docsContext.storyById)(currentId).parameters,
            singleProps = props,
            multiProps = props,
            source = props.code,
            storyIds = (multiProps.ids || [singleProps.id || currentId]).map(function (targetId) {
              return targetId === CURRENT_SELECTION ? currentId : targetId
            }),
            stories = useStories(storyIds, docsContext)
          if (!stories.every(Boolean)) return { error: blocks_Source.b.SOURCE_UNAVAILABLE, state: SourceState.NONE }
          source ||
            (source = storyIds
              .map(function (storyId, idx) {
                var storySource = (function getStorySource(storyId, sourceContext) {
                    var sources = sourceContext.sources
                    return (null == sources ? void 0 : sources[storyId]) || ''
                  })(storyId, sourceContext),
                  storyObj = stories[idx]
                return Source_getSnippet(storySource, storyObj)
              })
              .join('\n\n'))
          var state = (function getSourceState(stories) {
              var states = stories
                .map(function (story) {
                  var _story$parameters$doc, _story$parameters$doc2
                  return null === (_story$parameters$doc = story.parameters.docs) ||
                    void 0 === _story$parameters$doc ||
                    null === (_story$parameters$doc2 = _story$parameters$doc.source) ||
                    void 0 === _story$parameters$doc2
                    ? void 0
                    : _story$parameters$doc2.state
                })
                .filter(Boolean)
              return 0 === states.length ? SourceState.CLOSED : states[0]
            })(stories),
            _parameters$docs5 = parameters.docs,
            _docsParameters$sourc = (void 0 === _parameters$docs5 ? {} : _parameters$docs5).source,
            _sourceParameters$lan = (void 0 === _docsParameters$sourc ? {} : _docsParameters$sourc).language,
            docsLanguage = void 0 === _sourceParameters$lan ? null : _sourceParameters$lan
          return source
            ? { code: source, state: state, language: props.language || docsLanguage || 'jsx', dark: props.dark || !1 }
            : { error: blocks_Source.b.SOURCE_UNAVAILABLE, state: state }
        },
        Source_Source = function Source(props) {
          var sourceContext = Object(react.useContext)(SourceContext),
            docsContext = Object(react.useContext)(DocsContext),
            sourceProps = Source_getSourceProps(props, docsContext, sourceContext)
          return react_default.a.createElement(blocks_Source.a, sourceProps)
        }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]))
        }
        return target
      }
      var DescriptionType,
        Canvas_Canvas = function Canvas(props) {
          var _getPreviewProps = (function getPreviewProps(_ref, docsContext, sourceContext) {
              var withSource = _ref.withSource,
                mdxSource = _ref.mdxSource,
                children = _ref.children,
                props = _objectWithoutProperties(_ref, ['withSource', 'mdxSource', 'children']),
                mdxComponentAnnotations = docsContext.mdxComponentAnnotations,
                mdxStoryNameToKey = docsContext.mdxStoryNameToKey,
                sourceState = withSource,
                isLoading = !1
              if (sourceState === SourceState.NONE) return { isLoading: isLoading, previewProps: props }
              if (mdxSource)
                return {
                  isLoading: isLoading,
                  previewProps: Object.assign({}, props, {
                    withSource: Source_getSourceProps({ code: decodeURI(mdxSource) }, docsContext, sourceContext)
                  })
                }
              var targetIds = (Array.isArray(children) ? children : [children])
                  .filter(function (c) {
                    return c.props && (c.props.id || c.props.name)
                  })
                  .map(function (s) {
                    return (
                      s.props.id ||
                      Object(dist.toId)(
                        mdxComponentAnnotations.id || mdxComponentAnnotations.title,
                        Object(dist.storyNameFromExport)(mdxStoryNameToKey[s.props.name])
                      )
                    )
                  }),
                sourceProps = Source_getSourceProps({ ids: targetIds }, docsContext, sourceContext)
              return (
                sourceState || (sourceState = sourceProps.state),
                {
                  isLoading: (isLoading = useStories(targetIds, docsContext).some(function (s) {
                    return !s
                  })),
                  previewProps: Object.assign({}, props, {
                    withSource: sourceProps,
                    isExpanded: sourceState === SourceState.OPEN
                  })
                }
              )
            })(props, Object(react.useContext)(DocsContext), Object(react.useContext)(SourceContext)),
            isLoading = _getPreviewProps.isLoading,
            previewProps = _getPreviewProps.previewProps,
            children = props.children
          return isLoading
            ? react_default.a.createElement(Preview.b, null)
            : react_default.a.createElement(
                react_dist_esm.a,
                { components: components_dist_esm.resetComponents },
                react_default.a.createElement(Preview.a, previewProps, children)
              )
        },
        Description =
          (__webpack_require__('./node_modules/core-js/modules/es.string.trim.js'),
          __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/Description.js')),
        docgen = __webpack_require__(
          './node_modules/@storybook/addon-essentials/node_modules/@storybook/addon-docs/dist/esm/lib/docgen/index.js'
        )
      !(function (DescriptionType) {
        ;(DescriptionType.INFO = 'info'),
          (DescriptionType.NOTES = 'notes'),
          (DescriptionType.DOCGEN = 'docgen'),
          (DescriptionType.LEGACY_5_2 = 'legacy-5.2'),
          (DescriptionType.AUTO = 'auto')
      })(DescriptionType || (DescriptionType = {}))
      var Description_getNotes = function getNotes(notes) {
          return (
            notes &&
            ('string' == typeof notes ? notes : Object(docgen.f)(notes.markdown) || Object(docgen.f)(notes.text))
          )
        },
        Description_getInfo = function getInfo(info) {
          return info && ('string' == typeof info ? info : Object(docgen.f)(info.text))
        },
        noDescription = function noDescription(component) {
          return null
        },
        Description_getDescriptionProps = function getDescriptionProps(_ref, _ref2) {
          var of = _ref.of,
            type = _ref.type,
            markdown = _ref.markdown,
            children = _ref.children,
            id = _ref2.id,
            _storyById = (0, _ref2.storyById)(id),
            component = _storyById.component,
            parameters = _storyById.parameters
          if (children || markdown) return { markdown: children || markdown }
          var notes = parameters.notes,
            info = parameters.info,
            _ref3 = parameters.docs || {},
            _ref3$extractComponen = _ref3.extractComponentDescription,
            extractComponentDescription = void 0 === _ref3$extractComponen ? noDescription : _ref3$extractComponen,
            description = _ref3.description,
            target = of === CURRENT_SELECTION ? component : of,
            componentDescriptionParameter = null == description ? void 0 : description.component
          if (componentDescriptionParameter) return { markdown: componentDescriptionParameter }
          switch (type) {
            case DescriptionType.INFO:
              return { markdown: Description_getInfo(info) }
            case DescriptionType.NOTES:
              return { markdown: Description_getNotes(notes) }
            case DescriptionType.LEGACY_5_2:
              return {
                markdown: '\n'
                  .concat(Description_getNotes(notes) || Description_getInfo(info) || '', '\n\n')
                  .concat(extractComponentDescription(target) || '', '\n')
                  .trim()
              }
            case DescriptionType.DOCGEN:
            case DescriptionType.AUTO:
            default:
              return {
                markdown: extractComponentDescription(target, Object.assign({ component: component }, parameters))
              }
          }
        },
        Description_DescriptionContainer = function DescriptionContainer(props) {
          var context = Object(react.useContext)(DocsContext),
            markdown = Description_getDescriptionProps(props, context).markdown
          return markdown ? react_default.a.createElement(Description.a, { markdown: markdown }) : null
        }
      Description_DescriptionContainer.defaultProps = { of: '.' }
      var blocks_DocsPage = __webpack_require__('./node_modules/@storybook/components/dist/esm/blocks/DocsPage.js'),
        STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/,
        extractTitle = function extractTitle(_ref) {
          var title = _ref.title,
            groups = title.trim().split(STORY_KIND_PATH_SEPARATOR)
          return (groups && groups[groups.length - 1]) || title
        },
        Title_Title = function Title(_ref2) {
          var children = _ref2.children,
            context = Object(react.useContext)(DocsContext),
            text = children
          return (
            text || (text = extractTitle(context)),
            text ? react_default.a.createElement(blocks_DocsPage.d, { className: 'sbdocs-title' }, text) : null
          )
        },
        Subtitle_Subtitle = function Subtitle(_ref) {
          var children = _ref.children,
            _useContext = Object(react.useContext)(DocsContext),
            id = _useContext.id,
            parameters = (0, _useContext.storyById)(id).parameters,
            text = children
          return (
            text || (text = null == parameters ? void 0 : parameters.componentSubtitle),
            text ? react_default.a.createElement(blocks_DocsPage.c, { className: 'sbdocs-subtitle' }, text) : null
          )
        },
        browser =
          (__webpack_require__('./node_modules/core-js/modules/es.object.freeze.js'),
          __webpack_require__('./node_modules/util-deprecate/browser.js')),
        browser_default = __webpack_require__.n(browser),
        ts_dedent_esm = __webpack_require__('./node_modules/ts-dedent/esm/index.js'),
        DocumentFormatting = __webpack_require__(
          './node_modules/@storybook/components/dist/esm/typography/DocumentFormatting.js'
        ),
        theming_dist_esm =
          (__webpack_require__('./node_modules/core-js/modules/es.string.match.js'),
          __webpack_require__('./node_modules/core-js/modules/es.string.starts-with.js'),
          __webpack_require__(
            './node_modules/@storybook/core-server/node_modules/@storybook/theming/dist/esm/index.js'
          ))
      function mdx_defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 })
            : (obj[key] = value),
          obj
        )
      }
      function mdx_extends() {
        return (
          (mdx_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          mdx_extends.apply(this, arguments)
        )
      }
      function mdx_objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function mdx_objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]))
        }
        return target
      }
      var mdx_document = window_default.a.document,
        assertIsFn = function assertIsFn(val) {
          if ('function' != typeof val) throw new Error('Expected story function, got: '.concat(val))
          return val
        },
        mdx_AddContext = function AddContext(props) {
          var children = props.children,
            rest = mdx_objectWithoutProperties(props, ['children']),
            parentContext = react_default.a.useContext(DocsContext)
          return react_default.a.createElement(
            DocsContext.Provider,
            { value: Object.assign({}, parentContext, rest) },
            children
          )
        },
        mdx_CodeOrSourceMdx = function CodeOrSourceMdx(_ref) {
          var className = _ref.className,
            children = _ref.children,
            rest = mdx_objectWithoutProperties(_ref, ['className', 'children'])
          if ('string' != typeof className && ('string' != typeof children || !children.match(/[\n\r]/g)))
            return react_default.a.createElement(DocumentFormatting.a, null, children)
          var language = className && className.split('-')
          return react_default.a.createElement(
            blocks_Source.a,
            mdx_extends({ language: (language && language[1]) || 'plaintext', format: !1, code: children }, rest)
          )
        }
      function mdx_navigate(url) {
        esm.a.getChannel().emit(dist_esm.NAVIGATE_URL, url)
      }
      var _templateObject,
        A = DocumentFormatting.e.a,
        mdx_AnchorInPage = function AnchorInPage(_ref2) {
          var hash = _ref2.hash,
            children = _ref2.children
          return react_default.a.createElement(
            A,
            {
              href: hash,
              target: '_self',
              onClick: function onClick(event) {
                var id = hash.substring(1)
                mdx_document.getElementById(id) && mdx_navigate(hash)
              }
            },
            children
          )
        },
        mdx_AnchorMdx = function AnchorMdx(props) {
          var href = props.href,
            target = props.target,
            children = props.children,
            rest = mdx_objectWithoutProperties(props, ['href', 'target', 'children'])
          if (href) {
            if (href.startsWith('#')) return react_default.a.createElement(mdx_AnchorInPage, { hash: href }, children)
            if ('_blank' !== target)
              return react_default.a.createElement(
                A,
                mdx_extends(
                  {
                    href: href,
                    onClick: function onClick(event) {
                      event.preventDefault(), mdx_navigate(event.currentTarget.getAttribute('href'))
                    },
                    target: target
                  },
                  rest
                ),
                children
              )
          }
          return react_default.a.createElement(A, props)
        },
        SUPPORTED_MDX_HEADERS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
        OcticonHeaders = SUPPORTED_MDX_HEADERS.reduce(function (acc, headerType) {
          return Object.assign(
            {},
            acc,
            mdx_defineProperty(
              {},
              headerType,
              Object(theming_dist_esm.styled)(DocumentFormatting.e[headerType])({
                '& svg': { visibility: 'hidden' },
                '&:hover svg': { visibility: 'visible' }
              })
            )
          )
        }, {}),
        OcticonAnchor = theming_dist_esm.styled.a(function () {
          return { float: 'left', paddingRight: '4px', marginLeft: '-20px', color: 'inherit' }
        }),
        mdx_HeaderWithOcticonAnchor = function HeaderWithOcticonAnchor(_ref3) {
          var as = _ref3.as,
            id = _ref3.id,
            children = _ref3.children,
            rest = mdx_objectWithoutProperties(_ref3, ['as', 'id', 'children']),
            OcticonHeader = OcticonHeaders[as],
            hash = '#'.concat(id)
          return react_default.a.createElement(
            OcticonHeader,
            mdx_extends({ id: id }, rest),
            react_default.a.createElement(
              OcticonAnchor,
              {
                'aria-hidden': 'true',
                href: hash,
                tabIndex: -1,
                target: '_self',
                onClick: function onClick(event) {
                  mdx_document.getElementById(id) && mdx_navigate(hash)
                }
              },
              react_default.a.createElement(
                'svg',
                {
                  viewBox: '0 0 16 16',
                  version: '1.1',
                  width: '16',
                  height: '16',
                  'aria-hidden': 'true',
                  fill: 'currentColor'
                },
                react_default.a.createElement('path', {
                  fillRule: 'evenodd',
                  d: 'M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z'
                })
              )
            ),
            children
          )
        },
        mdx_HeaderMdx = function HeaderMdx(props) {
          var as = props.as,
            id = props.id,
            children = props.children,
            rest = mdx_objectWithoutProperties(props, ['as', 'id', 'children'])
          if (id)
            return react_default.a.createElement(
              mdx_HeaderWithOcticonAnchor,
              mdx_extends({ as: as, id: id }, rest),
              children
            )
          var Header = DocumentFormatting.e[as]
          return react_default.a.createElement(Header, props)
        },
        HeadersMdx = SUPPORTED_MDX_HEADERS.reduce(function (acc, headerType) {
          return Object.assign(
            {},
            acc,
            mdx_defineProperty({}, headerType, function (props) {
              return react_default.a.createElement(mdx_HeaderMdx, mdx_extends({ as: headerType }, props))
            })
          )
        }, {}),
        Subheading_Subheading = function Subheading(_ref) {
          var children = _ref.children
          if (_ref.disableAnchor || 'string' != typeof children)
            return react_default.a.createElement(DocumentFormatting.c, null, children)
          var tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, '-')
          return react_default.a.createElement(mdx_HeaderMdx, { as: 'h3', id: tagID }, children)
        }
      var warnStoryDescription = browser_default()(
          function () {},
          Object(ts_dedent_esm.a)(
            _templateObject ||
              (_templateObject = (function _taggedTemplateLiteral(strings, raw) {
                return (
                  raw || (raw = strings.slice(0)),
                  Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }))
                )
              })([
                '\n    Deprecated parameter: docs.storyDescription => docs.description.story\n      \n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#docs-description-parameter\n  '
              ]))
          )
        ),
        DocsStory_DocsStory = function DocsStory(_ref) {
          var description,
            _docs$description,
            id = _ref.id,
            name = _ref.name,
            _ref$expanded = _ref.expanded,
            expanded = void 0 === _ref$expanded || _ref$expanded,
            _ref$withToolbar = _ref.withToolbar,
            withToolbar = void 0 !== _ref$withToolbar && _ref$withToolbar,
            _ref$parameters = _ref.parameters,
            parameters = void 0 === _ref$parameters ? {} : _ref$parameters,
            docs = parameters.docs
          expanded &&
            docs &&
            ((description =
              null === (_docs$description = docs.description) || void 0 === _docs$description
                ? void 0
                : _docs$description.story) ||
              ((description = docs.storyDescription) && warnStoryDescription()))
          var subheading = expanded && name
          return react_default.a.createElement(
            Anchor_Anchor,
            { storyId: id },
            subheading && react_default.a.createElement(Subheading_Subheading, null, subheading),
            description && react_default.a.createElement(Description_DescriptionContainer, { markdown: description }),
            react_default.a.createElement(
              Canvas_Canvas,
              { withToolbar: withToolbar },
              react_default.a.createElement(Story_Story, { id: id, parameters: parameters })
            )
          )
        }
      function Primary_extends() {
        return (
          (Primary_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          Primary_extends.apply(this, arguments)
        )
      }
      var Primary_Primary = function Primary(_ref) {
          var story,
            name = _ref.name,
            componentStories = (0, Object(react.useContext)(DocsContext).componentStories)()
          return (
            componentStories &&
              (story = name
                ? componentStories.find(function (s) {
                    return s.name === name
                  })
                : componentStories[0]),
            story
              ? react_default.a.createElement(
                  DocsStory_DocsStory,
                  Primary_extends({}, story, { expanded: !1, withToolbar: !0 })
                )
              : null
          )
        },
        Heading_Heading = function Heading(_ref) {
          var children = _ref.children
          if (_ref.disableAnchor || 'string' != typeof children)
            return react_default.a.createElement(DocumentFormatting.b, null, children)
          var tagID = children.toLowerCase().replace(/[^a-z0-9]/gi, '-')
          return react_default.a.createElement(mdx_HeaderMdx, { as: 'h2', id: tagID }, children)
        }
      function Stories_extends() {
        return (
          (Stories_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          Stories_extends.apply(this, arguments)
        )
      }
      var Stories_Stories = function Stories(_ref) {
        var title = _ref.title,
          _ref$includePrimary = _ref.includePrimary,
          includePrimary = void 0 !== _ref$includePrimary && _ref$includePrimary,
          stories = (0, Object(react.useContext)(DocsContext).componentStories)()
        return (
          includePrimary || (stories = stories.slice(1)),
          stories && 0 !== stories.length
            ? react_default.a.createElement(
                react_default.a.Fragment,
                null,
                react_default.a.createElement(Heading_Heading, null, title),
                stories.map(function (story) {
                  return (
                    story &&
                    react_default.a.createElement(
                      DocsStory_DocsStory,
                      Stories_extends({ key: story.id }, story, { expanded: !0 })
                    )
                  )
                })
              )
            : null
        )
      }
      Stories_Stories.defaultProps = { title: 'Stories' }
      var DocsContainer_templateObject,
        DocsPage_DocsPage = function DocsPage() {
          return react_default.a.createElement(
            react_default.a.Fragment,
            null,
            react_default.a.createElement(Title_Title, null),
            react_default.a.createElement(Subtitle_Subtitle, null),
            react_default.a.createElement(Description_DescriptionContainer, null),
            react_default.a.createElement(Primary_Primary, null),
            react_default.a.createElement(blocks_ArgsTable_ArgsTable, { story: PRIMARY_STORY }),
            react_default.a.createElement(Stories_Stories, null)
          )
        },
        ensure =
          (__webpack_require__('./node_modules/core-js/modules/web.url.js'),
          __webpack_require__(
            './node_modules/@storybook/core-server/node_modules/@storybook/theming/dist/esm/ensure.js'
          )),
        emotion_theming_browser_esm = __webpack_require__(
          './node_modules/emotion-theming/dist/emotion-theming.browser.esm.js'
        )
      var DocsContainer_document = window_default.a.document,
        globalWindow = window_default.a.window,
        defaultComponents = Object.assign(
          {},
          DocumentFormatting.e,
          { code: mdx_CodeOrSourceMdx, a: mdx_AnchorMdx },
          HeadersMdx
        ),
        warnOptionsTheme = browser_default()(
          function () {},
          Object(ts_dedent_esm.a)(
            DocsContainer_templateObject ||
              (DocsContainer_templateObject = (function DocsContainer_taggedTemplateLiteral(strings, raw) {
                return (
                  raw || (raw = strings.slice(0)),
                  Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }))
                )
              })([
                '\n    Deprecated parameter: options.theme => docs.theme\n\n    https://github.com/storybookjs/storybook/blob/next/addons/docs/docs/theming.md#storybook-theming\n'
              ]))
          )
        ),
        DocsContainer_DocsContainer = function DocsContainer(_ref) {
          var context = _ref.context,
            children = _ref.children,
            storyId = context.id,
            _storyById$parameters = (0, context.storyById)(storyId).parameters,
            _storyById$parameters2 = _storyById$parameters.options,
            options = void 0 === _storyById$parameters2 ? {} : _storyById$parameters2,
            _storyById$parameters3 = _storyById$parameters.docs,
            docs = void 0 === _storyById$parameters3 ? {} : _storyById$parameters3,
            themeVars = docs.theme
          !themeVars && options.theme && (warnOptionsTheme(), (themeVars = options.theme))
          var theme = Object(ensure.a)(themeVars),
            allComponents = Object.assign({}, defaultComponents, docs.components)
          return (
            Object(react.useEffect)(
              function () {
                var url
                try {
                  url = new URL(globalWindow.parent.location)
                } catch (err) {
                  return
                }
                if (url.hash) {
                  var element = DocsContainer_document.getElementById(url.hash.substring(1))
                  element &&
                    setTimeout(function () {
                      scrollToElement(element)
                    }, 200)
                } else {
                  var _element =
                    DocsContainer_document.getElementById(anchorBlockIdFromId(storyId)) ||
                    DocsContainer_document.getElementById(storyBlockIdFromId(storyId))
                  if (_element) {
                    var allStories = _element.parentElement.querySelectorAll('[id|="anchor-"]'),
                      scrollTarget = _element
                    allStories &&
                      allStories[0] === _element &&
                      (scrollTarget = DocsContainer_document.getElementById('docs-root')),
                      setTimeout(function () {
                        scrollToElement(scrollTarget, 'start')
                      }, 200)
                  }
                }
              },
              [storyId]
            ),
            react_default.a.createElement(
              DocsContext.Provider,
              { value: context },
              react_default.a.createElement(
                SourceContainer_SourceContainer,
                null,
                react_default.a.createElement(
                  emotion_theming_browser_esm.a,
                  { theme: theme },
                  react_default.a.createElement(
                    react_dist_esm.a,
                    { components: allComponents },
                    react_default.a.createElement(
                      blocks_DocsPage.b,
                      { className: 'sbdocs sbdocs-wrapper' },
                      react_default.a.createElement(blocks_DocsPage.a, { className: 'sbdocs sbdocs-content' }, children)
                    )
                  )
                )
              )
            )
          )
        },
        Meta_document = window_default.a.document
      var Preview_templateObject,
        Meta = function Meta() {
          return 'docs' === new URL(Meta_document.location).searchParams.get('viewMode')
            ? (function renderAnchor() {
                var context = Object(react.useContext)(DocsContext),
                  anchorId =
                    (function getFirstStoryId(docsContext) {
                      var stories = docsContext.componentStories()
                      return stories.length > 0 ? stories[0].id : null
                    })(context) || context.id
                return react_default.a.createElement(Anchor_Anchor, { storyId: anchorId })
              })()
            : null
        }
      var Props_templateObject,
        Preview_Preview = browser_default()(
          function (props) {
            return react_default.a.createElement(Canvas_Canvas, props)
          },
          Object(ts_dedent_esm.a)(
            Preview_templateObject ||
              (Preview_templateObject = (function Preview_taggedTemplateLiteral(strings, raw) {
                return (
                  raw || (raw = strings.slice(0)),
                  Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }))
                )
              })([
                '\n    Preview doc block has been renamed to Canvas.\n\n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed\n  '
              ]))
          )
        )
      var Props = browser_default()(
        function (props) {
          return react_default.a.createElement(blocks_ArgsTable_ArgsTable, props)
        },
        Object(ts_dedent_esm.a)(
          Props_templateObject ||
            (Props_templateObject = (function Props_taggedTemplateLiteral(strings, raw) {
              return (
                raw || (raw = strings.slice(0)),
                Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }))
              )
            })([
              '\n    Props doc block has been renamed to ArgsTable.\n\n    https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#previewprops-renamed\n  '
            ]))
        )
      )
      Props.defaultProps = { of: CURRENT_SELECTION }
      var Wrapper_Wrapper = function Wrapper(_ref) {
        var children = _ref.children
        return react_default.a.createElement('div', { style: { fontFamily: 'sans-serif' } }, children)
      }
    },
    './node_modules/@storybook/components/dist/esm/blocks/IconGallery.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'b', function () {
        return IconItem
      }),
        __webpack_require__.d(__webpack_exports__, 'a', function () {
          return IconGallery
        })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.function.name.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js')
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/react/index.js'),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),
        _storybook_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/@storybook/core-server/node_modules/@storybook/theming/dist/esm/index.js'
        ),
        _typography_DocumentFormatting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
          './node_modules/@storybook/components/dist/esm/typography/DocumentFormatting.js'
        ),
        _BlockBackgroundStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          './node_modules/@storybook/components/dist/esm/blocks/BlockBackgroundStyles.js'
        )
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          _extends.apply(this, arguments)
        )
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]))
        }
        return target
      }
      var ItemLabel = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div(function (_ref) {
          var theme = _ref.theme
          return {
            fontFamily: theme.typography.fonts.base,
            fontSize: theme.typography.size.s2,
            color: theme.color.defaultText,
            marginLeft: 10,
            lineHeight: 1.2
          }
        }),
        ItemSpecimen = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div(function (_ref2) {
          var theme = _ref2.theme
          return Object.assign({}, Object(_BlockBackgroundStyles__WEBPACK_IMPORTED_MODULE_7__.a)(theme), {
            overflow: 'hidden',
            height: 40,
            width: 40,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 'none',
            '> img, > svg': { width: 20, height: 20 }
          })
        }),
        Item = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div({
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          flex: '0 1 calc(20% - 10px)',
          minWidth: 120,
          margin: '0px 10px 30px 0'
        }),
        List = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div({ display: 'flex', flexFlow: 'row wrap' }),
        IconItem = function IconItem(_ref3) {
          var name = _ref3.name,
            children = _ref3.children
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            Item,
            null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ItemSpecimen, null, children),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ItemLabel, null, name)
          )
        }
      IconItem.displayName = 'IconItem'
      var IconGallery = function IconGallery(_ref4) {
        var children = _ref4.children,
          props = _objectWithoutProperties(_ref4, ['children'])
        return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
          _typography_DocumentFormatting__WEBPACK_IMPORTED_MODULE_6__.d,
          null,
          react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            List,
            _extends({}, props, { className: 'docblock-icongallery' }),
            children
          )
        )
      }
      IconGallery.displayName = 'IconGallery'
    },
    './node_modules/@storybook/components/dist/esm/blocks/Typeset.js': function (
      module,
      __webpack_exports__,
      __webpack_require__
    ) {
      'use strict'
      __webpack_require__.d(__webpack_exports__, 'a', function () {
        return Typeset
      })
      __webpack_require__('./node_modules/core-js/modules/es.object.assign.js'),
        __webpack_require__('./node_modules/core-js/modules/es.array.map.js'),
        __webpack_require__('./node_modules/core-js/modules/es.object.keys.js'),
        __webpack_require__('./node_modules/core-js/modules/es.symbol.js')
      var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__('./node_modules/react/index.js'),
        react__WEBPACK_IMPORTED_MODULE_4___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),
        _storybook_theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
          './node_modules/@storybook/core-server/node_modules/@storybook/theming/dist/esm/index.js'
        ),
        polished__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__('./node_modules/polished/dist/polished.esm.js'),
        _typography_shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
          './node_modules/@storybook/components/dist/esm/typography/shared.js'
        ),
        _BlockBackgroundStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
          './node_modules/@storybook/components/dist/esm/blocks/BlockBackgroundStyles.js'
        )
      function _extends() {
        return (
          (_extends =
            Object.assign ||
            function (target) {
              for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i]
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key])
              }
              return target
            }),
          _extends.apply(this, arguments)
        )
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        var key,
          i,
          target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            var key,
              i,
              target = {},
              sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]), excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          var sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) && (target[key] = source[key]))
        }
        return target
      }
      var Label = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div(function (_ref) {
          var theme = _ref.theme
          return {
            marginRight: 30,
            fontSize: ''.concat(theme.typography.size.s1, 'px'),
            color:
              'light' === theme.base
                ? Object(polished__WEBPACK_IMPORTED_MODULE_6__.e)(0.4, theme.color.defaultText)
                : Object(polished__WEBPACK_IMPORTED_MODULE_6__.e)(0.6, theme.color.defaultText)
          }
        }),
        Sample = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div({
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }),
        TypeSpecimen = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div({
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'baseline',
          '&:not(:last-child)': { marginBottom: '1rem' }
        }),
        Wrapper = _storybook_theming__WEBPACK_IMPORTED_MODULE_5__.styled.div(
          _typography_shared__WEBPACK_IMPORTED_MODULE_7__.d,
          function (_ref2) {
            var theme = _ref2.theme
            return Object.assign({}, Object(_BlockBackgroundStyles__WEBPACK_IMPORTED_MODULE_8__.a)(theme), {
              margin: '25px 0 40px',
              padding: '30px 20px'
            })
          }
        ),
        Typeset = function Typeset(_ref3) {
          var fontFamily = _ref3.fontFamily,
            fontSizes = _ref3.fontSizes,
            fontWeight = _ref3.fontWeight,
            sampleText = _ref3.sampleText,
            props = _objectWithoutProperties(_ref3, ['fontFamily', 'fontSizes', 'fontWeight', 'sampleText'])
          return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
            Wrapper,
            _extends({}, props, { className: 'docblock-typeset' }),
            fontSizes.map(function (size) {
              return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                TypeSpecimen,
                { key: size },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Label, null, size),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(
                  Sample,
                  { style: { fontFamily: fontFamily, fontSize: size, fontWeight: fontWeight, lineHeight: 1.2 } },
                  sampleText || 'Was he a beast if music could move him so?'
                )
              )
            })
          )
        }
      Typeset.displayName = 'Typeset'
    }
  }
])
