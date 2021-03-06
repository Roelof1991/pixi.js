/**
 * String of the current PIXI version.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {string}
 */
export const VERSION = __VERSION__;

/**
 * Two Pi.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
export const PI_2 = Math.PI * 2;

/**
 * Conversion factor for converting radians to degrees.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
export const RAD_TO_DEG = 180 / Math.PI;

/**
 * Conversion factor for converting degrees to radians.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
export const DEG_TO_RAD = Math.PI / 180;

/**
 * Constant to identify the Renderer Type.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} UNKNOWN - Unknown render type.
 * @property {number} WEBGL - WebGL render type.
 * @property {number} CANVAS - Canvas render type.
 */
export const RENDERER_TYPE = {
    UNKNOWN:    0,
    WEBGL:      1,
    CANVAS:     2,
};

/**
 * Various blend modes supported by PIXI.
 *
 * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
 * Anything else will silently act like NORMAL.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} NORMAL
 * @property {number} ADD
 * @property {number} MULTIPLY
 * @property {number} SCREEN
 * @property {number} OVERLAY
 * @property {number} DARKEN
 * @property {number} LIGHTEN
 * @property {number} COLOR_DODGE
 * @property {number} COLOR_BURN
 * @property {number} HARD_LIGHT
 * @property {number} SOFT_LIGHT
 * @property {number} DIFFERENCE
 * @property {number} EXCLUSION
 * @property {number} HUE
 * @property {number} SATURATION
 * @property {number} COLOR
 * @property {number} LUMINOSITY
 */
export const BLEND_MODES = {
    NORMAL:         0,
    ADD:            1,
    MULTIPLY:       2,
    SCREEN:         3,
    OVERLAY:        4,
    DARKEN:         5,
    LIGHTEN:        6,
    COLOR_DODGE:    7,
    COLOR_BURN:     8,
    HARD_LIGHT:     9,
    SOFT_LIGHT:     10,
    DIFFERENCE:     11,
    EXCLUSION:      12,
    HUE:            13,
    SATURATION:     14,
    COLOR:          15,
    LUMINOSITY:     16,
};

/**
 * Various webgl draw modes. These can be used to specify which GL drawMode to use
 * under certain situations and renderers.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} POINTS
 * @property {number} LINES
 * @property {number} LINE_LOOP
 * @property {number} LINE_STRIP
 * @property {number} TRIANGLES
 * @property {number} TRIANGLE_STRIP
 * @property {number} TRIANGLE_FAN
 */
export const DRAW_MODES = {
    POINTS:         0,
    LINES:          1,
    LINE_LOOP:      2,
    LINE_STRIP:     3,
    TRIANGLES:      4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN:   6,
};

/**
 * The scale modes that are supported by pixi.
 *
 * The PIXI.settings.SCALE_MODE scale mode affects the default scaling mode of future operations.
 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} LINEAR Smooth scaling
 * @property {number} NEAREST Pixelating scaling
 */
export const SCALE_MODES = {
    LINEAR:     0,
    NEAREST:    1,
};

/**
 * The wrap modes that are supported by pixi.
 *
 * The PIXI.settings.WRAP_MODE wrap mode affects the default wraping mode of future operations.
 * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
 * If the texture is non power of two then clamp will be used regardless as webGL can
 * only use REPEAT if the texture is po2.
 *
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} CLAMP - The textures uvs are clamped
 * @property {number} REPEAT - The texture uvs tile and repeat
 * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
 */
export const WRAP_MODES = {
    CLAMP:          0,
    REPEAT:         1,
    MIRRORED_REPEAT: 2,
};

/**
 * The gc modes that are supported by pixi.
 *
 * The PIXI.settings.GC_MODE Garbage Collection mode for pixi textures is AUTO
 * If set to GC_MODE, the renderer will occasianally check textures usage. If they are not
 * used for a specified period of time they will be removed from the GPU. They will of course
 * be uploaded again when they are required. This is a silent behind the scenes process that
 * should ensure that the GPU does not  get filled up.
 *
 * Handy for mobile devices!
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} AUTO - Garbage collection will happen periodically automatically
 * @property {number} MANUAL - Garbage collection will need to be called manually
 */
export const GC_MODES = {
    AUTO:           0,
    MANUAL:         1,
};

/**
 * Regexp for image type by extension.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {RegExp|string}
 * @example `image.png`
 */
export const URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;

/**
 * Regexp for data URI.
 * Based on: https://github.com/ragingwind/data-uri-regex
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {RegExp|string}
 * @example `data:image/png;base64`
 */
export const DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i;

/**
 * Regexp for SVG size.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {RegExp|string}
 * @example `<svg width="100" height="100"></svg>`
 */
export const SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i; // eslint-disable-line max-len

/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} POLY
 * @property {number} RECT
 * @property {number} CIRC
 * @property {number} ELIP
 * @property {number} RREC
 */
export const SHAPES = {
    POLY: 0,
    RECT: 1,
    CIRC: 2,
    ELIP: 3,
    RREC: 4,
};

/**
 * Constants that specify float precision in shaders.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {string} LOW='lowp'
 * @property {string} MEDIUM='mediump'
 * @property {string} HIGH='highp'
 */
export const PRECISION = {
    LOW: 'lowp',
    MEDIUM: 'mediump',
    HIGH: 'highp',
};

/**
 * Constants that specify the transform type.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} STATIC
 * @property {number} DYNAMIC
 */
export const TRANSFORM_MODE = {
    STATIC:     0,
    DYNAMIC:    1,
};

/**
 * Constants that define the type of gradient on text.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {object}
 * @property {number} LINEAR_VERTICAL
 * @property {number} LINEAR_HORIZONTAL
 */
export const TEXT_GRADIENT = {
    LINEAR_VERTICAL: 0,
    LINEAR_HORIZONTAL: 1,
};
