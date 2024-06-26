/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  "use strict";
  var t = function () {
    return (
      (t =
        Object.assign ||
        function (t) {
          for (var e, i = 1, s = arguments.length; i < s; i++)
            for (var n in (e = arguments[i]))
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          return t;
        }),
      t.apply(this, arguments)
    );
  };
  var e = "lgAfterAppendSlide",
    i = "lgInit",
    s = "lgHasVideo",
    n = "lgContainerResize",
    o = "lgUpdateSlides",
    r = "lgAfterAppendSubHtml",
    l = "lgBeforeOpen",
    a = "lgAfterOpen",
    c = "lgSlideItemLoad",
    d = "lgBeforeSlide",
    u = "lgAfterSlide",
    h = "lgPosterClick",
    g = "lgDragStart",
    m = "lgDragMove",
    p = "lgDragEnd",
    f = "lgBeforeNextSlide",
    v = "lgBeforePrevSlide",
    y = "lgBeforeClose",
    b = "lgAfterClose",
    S = {
      mode: "lg-slide",
      easing: "ease",
      speed: 400,
      licenseKey: "0000-0000-000-0000",
      height: "100%",
      width: "100%",
      addClass: "",
      startClass: "lg-start-zoom",
      backdropDuration: 300,
      container: "",
      startAnimationDuration: 400,
      zoomFromOrigin: !0,
      hideBarsDelay: 0,
      showBarsAfter: 1e4,
      slideDelay: 0,
      supportLegacyBrowser: !0,
      allowMediaOverlap: !1,
      videoMaxSize: "1280-720",
      loadYouTubePoster: !0,
      defaultCaptionHeight: 0,
      ariaLabelledby: "",
      ariaDescribedby: "",
      resetScrollPosition: !0,
      hideScrollbar: !1,
      closable: !0,
      swipeToClose: !0,
      closeOnTap: !0,
      showCloseIcon: !0,
      showMaximizeIcon: !1,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      trapFocus: !0,
      controls: !0,
      slideEndAnimation: !0,
      hideControlOnEnd: !1,
      mousewheel: !1,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: ".lg-sub-html",
      subHtmlSelectorRelative: !1,
      preload: 2,
      numberOfSlideItemsInDom: 10,
      selector: "",
      selectWithin: "",
      nextHtml: "",
      prevHtml: "",
      index: 0,
      iframeWidth: "100%",
      iframeHeight: "100%",
      iframeMaxWidth: "100%",
      iframeMaxHeight: "100%",
      download: !0,
      counter: !0,
      appendCounterTo: ".lg-toolbar",
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      extraProps: [],
      exThumbImage: "",
      isMobile: void 0,
      mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
      plugins: [],
      strings: {
        closeGallery: "Close gallery",
        toggleMaximize: "Toggle maximize",
        previousSlide: "Previous slide",
        nextSlide: "Next slide",
        download: "Download",
        playVideo: "Play video",
      },
    };
  var w = (function () {
    function t(t) {
      return (
        (this.cssVenderPrefixes = [
          "TransitionDuration",
          "TransitionTimingFunction",
          "Transform",
          "Transition",
        ]),
        (this.selector = this._getSelector(t)),
        (this.firstElement = this._getFirstEl()),
        this
      );
    }
    return (
      (t.generateUUID = function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
          /[xy]/g,
          function (t) {
            var e = (16 * Math.random()) | 0;
            return ("x" == t ? e : (3 & e) | 8).toString(16);
          }
        );
      }),
      (t.prototype._getSelector = function (t, e) {
        return (
          void 0 === e && (e = document),
          "string" != typeof t
            ? t
            : ((e = e || document),
              "#" === t.substring(0, 1)
                ? e.querySelector(t)
                : e.querySelectorAll(t))
        );
      }),
      (t.prototype._each = function (t) {
        return this.selector
          ? (void 0 !== this.selector.length
              ? [].forEach.call(this.selector, t)
              : t(this.selector, 0),
            this)
          : this;
      }),
      (t.prototype._setCssVendorPrefix = function (t, e, i) {
        var s = e.replace(/-([a-z])/gi, function (t, e) {
          return e.toUpperCase();
        });
        -1 !== this.cssVenderPrefixes.indexOf(s)
          ? ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
            (t.style["webkit" + s] = i),
            (t.style["moz" + s] = i),
            (t.style["ms" + s] = i),
            (t.style["o" + s] = i))
          : (t.style[s] = i);
      }),
      (t.prototype._getFirstEl = function () {
        return this.selector && void 0 !== this.selector.length
          ? this.selector[0]
          : this.selector;
      }),
      (t.prototype.isEventMatched = function (t, e) {
        var i = e.split(".");
        return t
          .split(".")
          .filter(function (t) {
            return t;
          })
          .every(function (t) {
            return -1 !== i.indexOf(t);
          });
      }),
      (t.prototype.attr = function (t, e) {
        return void 0 === e
          ? this.firstElement
            ? this.firstElement.getAttribute(t)
            : ""
          : (this._each(function (i) {
              i.setAttribute(t, e);
            }),
            this);
      }),
      (t.prototype.find = function (t) {
        return C(this._getSelector(t, this.selector));
      }),
      (t.prototype.first = function () {
        return this.selector && void 0 !== this.selector.length
          ? C(this.selector[0])
          : C(this.selector);
      }),
      (t.prototype.eq = function (t) {
        return C(this.selector[t]);
      }),
      (t.prototype.parent = function () {
        return C(this.selector.parentElement);
      }),
      (t.prototype.get = function () {
        return this._getFirstEl();
      }),
      (t.prototype.removeAttr = function (t) {
        var e = t.split(" ");
        return (
          this._each(function (t) {
            e.forEach(function (e) {
              return t.removeAttribute(e);
            });
          }),
          this
        );
      }),
      (t.prototype.wrap = function (t) {
        if (!this.firstElement) return this;
        var e = document.createElement("div");
        return (
          (e.className = t),
          this.firstElement.parentNode.insertBefore(e, this.firstElement),
          this.firstElement.parentNode.removeChild(this.firstElement),
          e.appendChild(this.firstElement),
          this
        );
      }),
      (t.prototype.addClass = function (t) {
        return (
          void 0 === t && (t = ""),
          this._each(function (e) {
            t.split(" ").forEach(function (t) {
              t && e.classList.add(t);
            });
          }),
          this
        );
      }),
      (t.prototype.removeClass = function (t) {
        return (
          this._each(function (e) {
            t.split(" ").forEach(function (t) {
              t && e.classList.remove(t);
            });
          }),
          this
        );
      }),
      (t.prototype.hasClass = function (t) {
        return !!this.firstElement && this.firstElement.classList.contains(t);
      }),
      (t.prototype.hasAttribute = function (t) {
        return !!this.firstElement && this.firstElement.hasAttribute(t);
      }),
      (t.prototype.toggleClass = function (t) {
        return this.firstElement
          ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this)
          : this;
      }),
      (t.prototype.css = function (t, e) {
        var i = this;
        return (
          this._each(function (s) {
            i._setCssVendorPrefix(s, t, e);
          }),
          this
        );
      }),
      (t.prototype.on = function (e, i) {
        var s = this;
        return this.selector
          ? (e.split(" ").forEach(function (e) {
              Array.isArray(t.eventListeners[e]) || (t.eventListeners[e] = []),
                t.eventListeners[e].push(i),
                s.selector.addEventListener(e.split(".")[0], i);
            }),
            this)
          : this;
      }),
      (t.prototype.once = function (t, e) {
        var i = this;
        return (
          this.on(t, function () {
            i.off(t), e(t);
          }),
          this
        );
      }),
      (t.prototype.off = function (e) {
        var i = this;
        return this.selector
          ? (Object.keys(t.eventListeners).forEach(function (s) {
              i.isEventMatched(e, s) &&
                (t.eventListeners[s].forEach(function (t) {
                  i.selector.removeEventListener(s.split(".")[0], t);
                }),
                (t.eventListeners[s] = []));
            }),
            this)
          : this;
      }),
      (t.prototype.trigger = function (t, e) {
        if (!this.firstElement) return this;
        var i = new CustomEvent(t.split(".")[0], { detail: e || null });
        return this.firstElement.dispatchEvent(i), this;
      }),
      (t.prototype.load = function (t) {
        var e = this;
        return (
          fetch(t)
            .then(function (t) {
              return t.text();
            })
            .then(function (t) {
              e.selector.innerHTML = t;
            }),
          this
        );
      }),
      (t.prototype.html = function (t) {
        return void 0 === t
          ? this.firstElement
            ? this.firstElement.innerHTML
            : ""
          : (this._each(function (e) {
              e.innerHTML = t;
            }),
            this);
      }),
      (t.prototype.append = function (t) {
        return (
          this._each(function (e) {
            "string" == typeof t
              ? e.insertAdjacentHTML("beforeend", t)
              : e.appendChild(t);
          }),
          this
        );
      }),
      (t.prototype.prepend = function (t) {
        return (
          this._each(function (e) {
            e.insertAdjacentHTML("afterbegin", t);
          }),
          this
        );
      }),
      (t.prototype.remove = function () {
        return (
          this._each(function (t) {
            t.parentNode.removeChild(t);
          }),
          this
        );
      }),
      (t.prototype.empty = function () {
        return (
          this._each(function (t) {
            t.innerHTML = "";
          }),
          this
        );
      }),
      (t.prototype.scrollTop = function (t) {
        return void 0 !== t
          ? ((document.body.scrollTop = t),
            (document.documentElement.scrollTop = t),
            this)
          : window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0;
      }),
      (t.prototype.scrollLeft = function (t) {
        return void 0 !== t
          ? ((document.body.scrollLeft = t),
            (document.documentElement.scrollLeft = t),
            this)
          : window.pageXOffset ||
              document.documentElement.scrollLeft ||
              document.body.scrollLeft ||
              0;
      }),
      (t.prototype.offset = function () {
        if (!this.firstElement) return { left: 0, top: 0 };
        var t = this.firstElement.getBoundingClientRect(),
          e = C("body").style().marginLeft;
        return {
          left: t.left - parseFloat(e) + this.scrollLeft(),
          top: t.top + this.scrollTop(),
        };
      }),
      (t.prototype.style = function () {
        return this.firstElement
          ? this.firstElement.currentStyle ||
              window.getComputedStyle(this.firstElement)
          : {};
      }),
      (t.prototype.width = function () {
        var t = this.style();
        return (
          this.firstElement.clientWidth -
          parseFloat(t.paddingLeft) -
          parseFloat(t.paddingRight)
        );
      }),
      (t.prototype.height = function () {
        var t = this.style();
        return (
          this.firstElement.clientHeight -
          parseFloat(t.paddingTop) -
          parseFloat(t.paddingBottom)
        );
      }),
      (t.eventListeners = {}),
      t
    );
  })();
  function C(t) {
    return (
      (function () {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function (t, e) {
          e = e || { bubbles: !1, cancelable: !1, detail: null };
          var i = document.createEvent("CustomEvent");
          return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
        };
      })(),
      Element.prototype.matches ||
        (Element.prototype.matches =
          Element.prototype.msMatchesSelector ||
          Element.prototype.webkitMatchesSelector),
      new w(t)
    );
  }
  var E = [
    "src",
    "sources",
    "subHtml",
    "subHtmlUrl",
    "html",
    "video",
    "poster",
    "slideName",
    "responsive",
    "srcset",
    "sizes",
    "iframe",
    "downloadUrl",
    "download",
    "width",
    "facebookShareUrl",
    "tweetText",
    "iframeTitle",
    "twitterShareUrl",
    "pinterestShareUrl",
    "pinterestText",
    "fbHtml",
    "disqusIdentifier",
    "disqusUrl",
  ];
  function I(t) {
    return "href" === t
      ? "src"
      : (t = (t =
          (t = t.replace("data-", "")).charAt(0).toLowerCase() +
          t.slice(1)).replace(/-([a-z])/g, function (t) {
          return t[1].toUpperCase();
        }));
  }
  var L = function (t, e, i, s) {
      void 0 === i && (i = 0);
      var n = C(t).attr("data-lg-size") || s;
      if (n) {
        var o = n.split(",");
        if (o[1])
          for (var r = window.innerWidth, l = 0; l < o.length; l++) {
            var a = o[l];
            if (parseInt(a.split("-")[2], 10) > r) {
              n = a;
              break;
            }
            l === o.length - 1 && (n = a);
          }
        var c = n.split("-"),
          d = parseInt(c[0], 10),
          u = parseInt(c[1], 10),
          h = e.width(),
          g = e.height() - i,
          m = Math.min(h, d),
          p = Math.min(g, u),
          f = Math.min(m / d, p / u);
        return { width: d * f, height: u * f };
      }
    },
    x = function (t, e, i, s, n) {
      if (n) {
        var o = C(t).find("img").first();
        if (o.get()) {
          var r = e.get().getBoundingClientRect(),
            l = r.width,
            a = e.height() - (i + s),
            c = o.width(),
            d = o.height(),
            u = o.style(),
            h =
              (l - c) / 2 -
              o.offset().left +
              (parseFloat(u.paddingLeft) || 0) +
              (parseFloat(u.borderLeft) || 0) +
              C(window).scrollLeft() +
              r.left,
            g =
              (a - d) / 2 -
              o.offset().top +
              (parseFloat(u.paddingTop) || 0) +
              (parseFloat(u.borderTop) || 0) +
              C(window).scrollTop() +
              i;
          return (
            "translate3d(" +
            (h *= -1) +
            "px, " +
            (g *= -1) +
            "px, 0) scale3d(" +
            c / n.width +
            ", " +
            d / n.height +
            ", 1)"
          );
        }
      }
    },
    T = function (t, e, i, s, n, o) {
      return (
        '<div class="lg-video-cont lg-has-iframe" style="width:' +
        t +
        "; max-width:" +
        i +
        "; height: " +
        e +
        "; max-height:" +
        s +
        '">\n                    <iframe class="lg-object" frameborder="0" ' +
        (o ? 'title="' + o + '"' : "") +
        ' src="' +
        n +
        '"  allowfullscreen="true"></iframe>\n                </div>'
      );
    },
    k = function (t, e, i, s, n, o) {
      var r =
          "<img " +
          i +
          " " +
          (s ? 'srcset="' + s + '"' : "") +
          "  " +
          (n ? 'sizes="' + n + '"' : "") +
          ' class="lg-object lg-image" data-index="' +
          t +
          '" src="' +
          e +
          '" />',
        l = "";
      o &&
        (l = ("string" == typeof o ? JSON.parse(o) : o).map(function (t) {
          var e = "";
          return (
            Object.keys(t).forEach(function (i) {
              e += " " + i + '="' + t[i] + '"';
            }),
            "<source " + e + "></source>"
          );
        }));
      return "" + l + r;
    },
    q = function (t) {
      for (var e = [], i = [], s = "", n = 0; n < t.length; n++) {
        var o = t[n].split(" ");
        "" === o[0] && o.splice(0, 1), i.push(o[0]), e.push(o[1]);
      }
      for (var r = window.innerWidth, l = 0; l < e.length; l++)
        if (parseInt(e[l], 10) > r) {
          s = i[l];
          break;
        }
      return s;
    },
    A = function (t) {
      return !!t && !!t.complete && 0 !== t.naturalWidth;
    },
    O = function (t, e, i, s, n) {
      return (
        '<div class="lg-video-cont ' +
        (n && n.youtube
          ? "lg-has-youtube"
          : n && n.vimeo
          ? "lg-has-vimeo"
          : "lg-has-html5") +
        '" style="' +
        i +
        '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
        s +
        '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
        s +
        '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
        (e || "") +
        '\n            <img class="lg-object lg-video-poster" src="' +
        t +
        '" />\n        </div>'
      );
    },
    D = function (t) {
      var e = t.querySelectorAll(
        'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
      );
      return [].filter.call(e, function (t) {
        var e = window.getComputedStyle(t);
        return "none" !== e.display && "hidden" !== e.visibility;
      });
    },
    M = function (t, e, i, s) {
      var n = [],
        o = (function () {
          for (var t = 0, e = 0, i = arguments.length; e < i; e++)
            t += arguments[e].length;
          var s = Array(t),
            n = 0;
          for (e = 0; e < i; e++)
            for (var o = arguments[e], r = 0, l = o.length; r < l; r++, n++)
              s[n] = o[r];
          return s;
        })(E, e);
      return (
        [].forEach.call(t, function (t) {
          for (var e = {}, r = 0; r < t.attributes.length; r++) {
            var l = t.attributes[r];
            if (l.specified) {
              var a = I(l.name),
                c = "";
              o.indexOf(a) > -1 && (c = a), c && (e[c] = l.value);
            }
          }
          var d = C(t),
            u = d.find("img").first().attr("alt"),
            h = d.attr("title"),
            g = s ? d.attr(s) : d.find("img").first().attr("src");
          (e.thumb = g),
            i && !e.subHtml && (e.subHtml = h || u || ""),
            (e.alt = u || h || ""),
            n.push(e);
        }),
        n
      );
    },
    z = function () {
      return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    },
    B = function (t, e, i) {
      if (!t)
        return e
          ? { html5: !0 }
          : void console.error(
              "lightGallery :- data-src is not provided on slide item " +
                (i + 1) +
                ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
            );
      var s = t.match(
          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
        ),
        n = t.match(
          /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
        ),
        o = t.match(
          /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
        );
      return s ? { youtube: s } : n ? { vimeo: n } : o ? { wistia: o } : void 0;
    },
    P = 0,
    _ = (function () {
      function E(t, e) {
        if (
          ((this.lgOpened = !1),
          (this.index = 0),
          (this.plugins = []),
          (this.lGalleryOn = !1),
          (this.lgBusy = !1),
          (this.currentItemsInDom = []),
          (this.prevScrollTop = 0),
          (this.bodyPaddingRight = 0),
          (this.isDummyImageRemoved = !1),
          (this.dragOrSwipeEnabled = !1),
          (this.mediaContainerPosition = { top: 0, bottom: 0 }),
          !t)
        )
          return this;
        if (
          (P++,
          (this.lgId = P),
          (this.el = t),
          (this.LGel = C(t)),
          this.generateSettings(e),
          this.buildModules(),
          this.settings.dynamic &&
            void 0 !== this.settings.dynamicEl &&
            !Array.isArray(this.settings.dynamicEl))
        )
          throw "When using dynamic mode, you must also define dynamicEl as an Array.";
        return (
          (this.galleryItems = this.getItems()),
          this.normalizeSettings(),
          this.init(),
          this.validateLicense(),
          this
        );
      }
      return (
        (E.prototype.generateSettings = function (e) {
          if (
            ((this.settings = t(t({}, S), e)),
            this.settings.isMobile &&
            "function" == typeof this.settings.isMobile
              ? this.settings.isMobile()
              : z())
          ) {
            var i = t(
              t({}, this.settings.mobileSettings),
              this.settings.mobileSettings
            );
            this.settings = t(t({}, this.settings), i);
          }
        }),
        (E.prototype.normalizeSettings = function () {
          this.settings.slideEndAnimation &&
            (this.settings.hideControlOnEnd = !1),
            this.settings.closable || (this.settings.swipeToClose = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            this.settings.dynamic && (this.zoomFromOrigin = !1),
            this.settings.container ||
              (this.settings.container = document.body),
            (this.settings.preload = Math.min(
              this.settings.preload,
              this.galleryItems.length
            ));
        }),
        (E.prototype.init = function () {
          var t = this;
          this.addSlideVideoInfo(this.galleryItems),
            this.buildStructure(),
            this.LGel.trigger(i, { instance: this }),
            this.settings.keyPress && this.keyPress(),
            setTimeout(function () {
              t.enableDrag(), t.enableSwipe(), t.triggerPosterClick();
            }, 50),
            this.arrow(),
            this.settings.mousewheel && this.mousewheel(),
            this.settings.dynamic || this.openGalleryOnItemClick();
        }),
        (E.prototype.openGalleryOnItemClick = function () {
          for (
            var t = this,
              e = function (e) {
                var s = i.items[e],
                  n = C(s),
                  o = w.generateUUID();
                n.attr("data-lg-id", o).on(
                  "click.lgcustom-item-" + o,
                  function (i) {
                    i.preventDefault();
                    var n = t.settings.index || e;
                    t.openGallery(n, s);
                  }
                );
              },
              i = this,
              s = 0;
            s < this.items.length;
            s++
          )
            e(s);
        }),
        (E.prototype.buildModules = function () {
          var t = this;
          this.settings.plugins.forEach(function (e) {
            t.plugins.push(new e(t, C));
          });
        }),
        (E.prototype.validateLicense = function () {
          this.settings.licenseKey
            ? "0000-0000-000-0000" === this.settings.licenseKey &&
              console.warn(
                "lightGallery: " +
                  this.settings.licenseKey +
                  " license key is not valid for production use"
              )
            : console.error("Please provide a valid license key");
        }),
        (E.prototype.getSlideItem = function (t) {
          return C(this.getSlideItemId(t));
        }),
        (E.prototype.getSlideItemId = function (t) {
          return "#lg-item-" + this.lgId + "-" + t;
        }),
        (E.prototype.getIdName = function (t) {
          return t + "-" + this.lgId;
        }),
        (E.prototype.getElementById = function (t) {
          return C("#" + this.getIdName(t));
        }),
        (E.prototype.manageSingleSlideClassName = function () {
          this.galleryItems.length < 2
            ? this.outer.addClass("lg-single-item")
            : this.outer.removeClass("lg-single-item");
        }),
        (E.prototype.buildStructure = function () {
          var t = this;
          if (!(this.$container && this.$container.get())) {
            var e = "",
              i = "";
            this.settings.controls &&
              (e =
                '<button type="button" id="' +
                this.getIdName("lg-prev") +
                '" aria-label="' +
                this.settings.strings.previousSlide +
                '" class="lg-prev lg-icon"> ' +
                this.settings.prevHtml +
                ' </button>\n                <button type="button" id="' +
                this.getIdName("lg-next") +
                '" aria-label="' +
                this.settings.strings.nextSlide +
                '" class="lg-next lg-icon"> ' +
                this.settings.nextHtml +
                " </button>"),
              ".lg-item" !== this.settings.appendSubHtmlTo &&
                (i =
                  '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
            var s = "";
            this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
            var n = this.settings.ariaLabelledby
                ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                : "",
              o = this.settings.ariaDescribedby
                ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                : "",
              r =
                "lg-container " +
                this.settings.addClass +
                " " +
                (document.body !== this.settings.container ? "lg-inline" : ""),
              l =
                this.settings.closable && this.settings.showCloseIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.closeGallery +
                    '" id="' +
                    this.getIdName("lg-close") +
                    '" class="lg-close lg-icon"></button>'
                  : "",
              a = this.settings.showMaximizeIcon
                ? '<button type="button" aria-label="' +
                  this.settings.strings.toggleMaximize +
                  '" id="' +
                  this.getIdName("lg-maximize") +
                  '" class="lg-maximize lg-icon"></button>'
                : "",
              c =
                '\n        <div class="' +
                r +
                '" id="' +
                this.getIdName("lg-container") +
                '" tabindex="-1" aria-modal="true" ' +
                n +
                " " +
                o +
                ' role="dialog"\n        >\n            <div id="' +
                this.getIdName("lg-backdrop") +
                '" class="lg-backdrop"></div>\n\n            <div id="' +
                this.getIdName("lg-outer") +
                '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                s +
                ' ">\n\n              <div id="' +
                this.getIdName("lg-content") +
                '" class="lg-content">\n                <div id="' +
                this.getIdName("lg-inner") +
                '" class="lg-inner">\n                </div>\n                ' +
                e +
                '\n              </div>\n                <div id="' +
                this.getIdName("lg-toolbar") +
                '" class="lg-toolbar lg-group">\n                    ' +
                a +
                "\n                    " +
                l +
                "\n                    </div>\n                    " +
                (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                '\n                <div id="' +
                this.getIdName("lg-components") +
                '" class="lg-components">\n                    ' +
                (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                "\n                </div>\n            </div>\n        </div>\n        ";
            C(this.settings.container).append(c),
              document.body !== this.settings.container &&
                C(this.settings.container).css("position", "relative"),
              (this.outer = this.getElementById("lg-outer")),
              (this.$lgComponents = this.getElementById("lg-components")),
              (this.$backdrop = this.getElementById("lg-backdrop")),
              (this.$container = this.getElementById("lg-container")),
              (this.$inner = this.getElementById("lg-inner")),
              (this.$content = this.getElementById("lg-content")),
              (this.$toolbar = this.getElementById("lg-toolbar")),
              this.$backdrop.css(
                "transition-duration",
                this.settings.backdropDuration + "ms"
              );
            var d = this.settings.mode + " ";
            this.manageSingleSlideClassName(),
              this.settings.enableDrag && (d += "lg-grab "),
              this.outer.addClass(d),
              this.$inner.css(
                "transition-timing-function",
                this.settings.easing
              ),
              this.$inner.css(
                "transition-duration",
                this.settings.speed + "ms"
              ),
              this.settings.download &&
                this.$toolbar.append(
                  '<a id="' +
                    this.getIdName("lg-download") +
                    '" target="_blank" rel="noopener" aria-label="' +
                    this.settings.strings.download +
                    '" download class="lg-download lg-icon"></a>'
                ),
              this.counter(),
              C(window).on(
                "resize.lg.global" +
                  this.lgId +
                  " orientationchange.lg.global" +
                  this.lgId,
                function () {
                  t.refreshOnResize();
                }
              ),
              this.hideBars(),
              this.manageCloseGallery(),
              this.toggleMaximize(),
              this.initModules();
          }
        }),
        (E.prototype.refreshOnResize = function () {
          if (this.lgOpened) {
            var t = this.galleryItems[this.index].__slideVideoInfo;
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var e = this.mediaContainerPosition,
              i = e.top,
              s = e.bottom;
            if (
              ((this.currentImageSize = L(
                this.items[this.index],
                this.outer,
                i + s,
                t && this.settings.videoMaxSize
              )),
              t && this.resizeVideoSlide(this.index, this.currentImageSize),
              this.zoomFromOrigin && !this.isDummyImageRemoved)
            ) {
              var o = this.getDummyImgStyles(this.currentImageSize);
              this.outer
                .find(".lg-current .lg-dummy-img")
                .first()
                .attr("style", o);
            }
            this.LGel.trigger(n);
          }
        }),
        (E.prototype.resizeVideoSlide = function (t, e) {
          var i = this.getVideoContStyle(e);
          this.getSlideItem(t).find(".lg-video-cont").attr("style", i);
        }),
        (E.prototype.updateSlides = function (t, e) {
          if (
            (this.index > t.length - 1 && (this.index = t.length - 1),
            1 === t.length && (this.index = 0),
            t.length)
          ) {
            var i = this.galleryItems[e].src;
            (this.galleryItems = t),
              this.updateControls(),
              this.$inner.empty(),
              (this.currentItemsInDom = []);
            var s = 0;
            this.galleryItems.some(function (t, e) {
              return t.src === i && ((s = e), !0);
            }),
              (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
              this.loadContent(s, !0),
              this.getSlideItem(s).addClass("lg-current"),
              (this.index = s),
              this.updateCurrentCounter(s),
              this.LGel.trigger(o);
          } else this.closeGallery();
        }),
        (E.prototype.getItems = function () {
          if (((this.items = []), this.settings.dynamic))
            return this.settings.dynamicEl || [];
          if ("this" === this.settings.selector) this.items.push(this.el);
          else if (this.settings.selector)
            if ("string" == typeof this.settings.selector)
              if (this.settings.selectWithin) {
                var t = C(this.settings.selectWithin);
                this.items = t.find(this.settings.selector).get();
              } else
                this.items = this.el.querySelectorAll(this.settings.selector);
            else this.items = this.settings.selector;
          else this.items = this.el.children;
          return M(
            this.items,
            this.settings.extraProps,
            this.settings.getCaptionFromTitleOrAlt,
            this.settings.exThumbImage
          );
        }),
        (E.prototype.shouldHideScrollbar = function () {
          return (
            this.settings.hideScrollbar &&
            document.body === this.settings.container
          );
        }),
        (E.prototype.hideScrollbar = function () {
          if (this.shouldHideScrollbar()) {
            this.bodyPaddingRight = parseFloat(C("body").style().paddingRight);
            var t = document.documentElement.getBoundingClientRect(),
              e = window.innerWidth - t.width;
            C(document.body).css(
              "padding-right",
              e + this.bodyPaddingRight + "px"
            ),
              C(document.body).addClass("lg-overlay-open");
          }
        }),
        (E.prototype.resetScrollBar = function () {
          this.shouldHideScrollbar() &&
            (C(document.body).css(
              "padding-right",
              this.bodyPaddingRight + "px"
            ),
            C(document.body).removeClass("lg-overlay-open"));
        }),
        (E.prototype.openGallery = function (t, e) {
          var i = this;
          if ((void 0 === t && (t = this.settings.index), !this.lgOpened)) {
            (this.lgOpened = !0),
              this.outer.removeClass("lg-hide-items"),
              this.hideScrollbar(),
              this.$container.addClass("lg-show");
            var s = this.getItemsToBeInsertedToDom(t, t);
            this.currentItemsInDom = s;
            var n = "";
            s.forEach(function (t) {
              n = n + '<div id="' + t + '" class="lg-item"></div>';
            }),
              this.$inner.append(n),
              this.addHtml(t);
            var o = "";
            this.mediaContainerPosition = this.getMediaContainerPosition();
            var r = this.mediaContainerPosition,
              c = r.top,
              d = r.bottom;
            this.settings.allowMediaOverlap ||
              this.setMediaContainerPosition(c, d);
            var u = this.galleryItems[t].__slideVideoInfo;
            this.zoomFromOrigin &&
              e &&
              ((this.currentImageSize = L(
                e,
                this.outer,
                c + d,
                u && this.settings.videoMaxSize
              )),
              (o = x(e, this.outer, c, d, this.currentImageSize))),
              (this.zoomFromOrigin && o) ||
                (this.outer.addClass(this.settings.startClass),
                this.getSlideItem(t).removeClass("lg-complete"));
            var h = this.settings.zoomFromOrigin
              ? 100
              : this.settings.backdropDuration;
            setTimeout(function () {
              i.outer.addClass("lg-components-open");
            }, h),
              (this.index = t),
              this.LGel.trigger(l),
              this.getSlideItem(t).addClass("lg-current"),
              (this.lGalleryOn = !1),
              (this.prevScrollTop = C(window).scrollTop()),
              setTimeout(function () {
                if (i.zoomFromOrigin && o) {
                  var e = i.getSlideItem(t);
                  e.css("transform", o),
                    setTimeout(function () {
                      e
                        .addClass("lg-start-progress lg-start-end-progress")
                        .css(
                          "transition-duration",
                          i.settings.startAnimationDuration + "ms"
                        ),
                        i.outer.addClass("lg-zoom-from-image");
                    }),
                    setTimeout(function () {
                      e.css("transform", "translate3d(0, 0, 0)");
                    }, 100);
                }
                setTimeout(function () {
                  i.$backdrop.addClass("in"),
                    i.$container.addClass("lg-show-in");
                }, 10),
                  setTimeout(function () {
                    i.settings.trapFocus &&
                      document.body === i.settings.container &&
                      i.trapFocus();
                  }, i.settings.backdropDuration + 50),
                  (i.zoomFromOrigin && o) ||
                    setTimeout(function () {
                      i.outer.addClass("lg-visible");
                    }, i.settings.backdropDuration),
                  i.slide(t, !1, !1, !1),
                  i.LGel.trigger(a);
              }),
              document.body === this.settings.container &&
                C("html").addClass("lg-on");
          }
        }),
        (E.prototype.getMediaContainerPosition = function () {
          if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
          var t = this.$toolbar.get().clientHeight || 0,
            e = this.outer.find(".lg-components .lg-sub-html").get(),
            i =
              this.settings.defaultCaptionHeight || (e && e.clientHeight) || 0,
            s = this.outer.find(".lg-thumb-outer").get();
          return { top: t, bottom: (s ? s.clientHeight : 0) + i };
        }),
        (E.prototype.setMediaContainerPosition = function (t, e) {
          void 0 === t && (t = 0),
            void 0 === e && (e = 0),
            this.$content.css("top", t + "px").css("bottom", e + "px");
        }),
        (E.prototype.hideBars = function () {
          var t = this;
          setTimeout(function () {
            t.outer.removeClass("lg-hide-items"),
              t.settings.hideBarsDelay > 0 &&
                (t.outer.on("mousemove.lg click.lg touchstart.lg", function () {
                  t.outer.removeClass("lg-hide-items"),
                    clearTimeout(t.hideBarTimeout),
                    (t.hideBarTimeout = setTimeout(function () {
                      t.outer.addClass("lg-hide-items");
                    }, t.settings.hideBarsDelay));
                }),
                t.outer.trigger("mousemove.lg"));
          }, this.settings.showBarsAfter);
        }),
        (E.prototype.initPictureFill = function (t) {
          if (this.settings.supportLegacyBrowser)
            try {
              picturefill({ elements: [t.get()] });
            } catch (t) {
              console.warn(
                "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
              );
            }
        }),
        (E.prototype.counter = function () {
          if (this.settings.counter) {
            var t =
              '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
              this.getIdName("lg-counter-current") +
              '" class="lg-counter-current">' +
              (this.index + 1) +
              ' </span> /\n                <span id="' +
              this.getIdName("lg-counter-all") +
              '" class="lg-counter-all">' +
              this.galleryItems.length +
              " </span></div>";
            this.outer.find(this.settings.appendCounterTo).append(t);
          }
        }),
        (E.prototype.addHtml = function (t) {
          var e, i;
          if (
            (this.galleryItems[t].subHtmlUrl
              ? (i = this.galleryItems[t].subHtmlUrl)
              : (e = this.galleryItems[t].subHtml),
            !i)
          )
            if (e) {
              var s = e.substring(0, 1);
              ("." !== s && "#" !== s) ||
                (e =
                  this.settings.subHtmlSelectorRelative &&
                  !this.settings.dynamic
                    ? C(this.items).eq(t).find(e).first().html()
                    : C(e).first().html());
            } else e = "";
          if (".lg-item" !== this.settings.appendSubHtmlTo)
            i
              ? this.outer.find(".lg-sub-html").load(i)
              : this.outer.find(".lg-sub-html").html(e);
          else {
            var n = C(this.getSlideItemId(t));
            i
              ? n.load(i)
              : n.append('<div class="lg-sub-html">' + e + "</div>");
          }
          null != e &&
            ("" === e
              ? this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .addClass("lg-empty-html")
              : this.outer
                  .find(this.settings.appendSubHtmlTo)
                  .removeClass("lg-empty-html")),
            this.LGel.trigger(r, { index: t });
        }),
        (E.prototype.preload = function (t) {
          for (
            var e = 1;
            e <= this.settings.preload && !(e >= this.galleryItems.length - t);
            e++
          )
            this.loadContent(t + e, !1);
          for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
            this.loadContent(t - i, !1);
        }),
        (E.prototype.getDummyImgStyles = function (t) {
          return t
            ? "width:" +
                t.width +
                "px;\n                margin-left: -" +
                t.width / 2 +
                "px;\n                margin-top: -" +
                t.height / 2 +
                "px;\n                height:" +
                t.height +
                "px"
            : "";
        }),
        (E.prototype.getVideoContStyle = function (t) {
          return t
            ? "width:" +
                t.width +
                "px;\n                height:" +
                t.height +
                "px"
            : "";
        }),
        (E.prototype.getDummyImageContent = function (t, e, i) {
          var s;
          if ((this.settings.dynamic || (s = C(this.items).eq(e)), s)) {
            var n = void 0;
            if (
              !(n = this.settings.exThumbImage
                ? s.attr(this.settings.exThumbImage)
                : s.find("img").first().attr("src"))
            )
              return "";
            var o =
              "<img " +
              i +
              ' style="' +
              this.getDummyImgStyles(this.currentImageSize) +
              '" class="lg-dummy-img" src="' +
              n +
              '" />';
            return (
              t.addClass("lg-first-slide"),
              this.outer.addClass("lg-first-slide-loading"),
              o
            );
          }
          return "";
        }),
        (E.prototype.setImgMarkup = function (t, e, i) {
          var s = this.galleryItems[i],
            n = s.alt,
            o = s.srcset,
            r = s.sizes,
            l = s.sources,
            a = n ? 'alt="' + n + '"' : "",
            c =
              '<picture class="lg-img-wrap"> ' +
              (this.isFirstSlideWithZoomAnimation()
                ? this.getDummyImageContent(e, i, a)
                : k(i, t, a, o, r, l)) +
              "</picture>";
          e.prepend(c);
        }),
        (E.prototype.onSlideObjectLoad = function (t, e, i, s) {
          var n = t.find(".lg-object").first();
          A(n.get()) || e
            ? i()
            : (n.on("load.lg error.lg", function () {
                i && i();
              }),
              n.on("error.lg", function () {
                s && s();
              }));
        }),
        (E.prototype.onLgObjectLoad = function (t, e, i, s, n, o) {
          var r = this;
          this.onSlideObjectLoad(
            t,
            o,
            function () {
              r.triggerSlideItemLoad(t, e, i, s, n);
            },
            function () {
              t.addClass("lg-complete lg-complete_"),
                t.html(
                  '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                );
            }
          );
        }),
        (E.prototype.triggerSlideItemLoad = function (t, e, i, s, n) {
          var o = this,
            r = this.galleryItems[e],
            l = n && "video" === this.getSlideType(r) && !r.poster ? s : 0;
          setTimeout(function () {
            t.addClass("lg-complete lg-complete_"),
              o.LGel.trigger(c, { index: e, delay: i || 0, isFirstSlide: n });
          }, l);
        }),
        (E.prototype.isFirstSlideWithZoomAnimation = function () {
          return !(
            this.lGalleryOn ||
            !this.zoomFromOrigin ||
            !this.currentImageSize
          );
        }),
        (E.prototype.addSlideVideoInfo = function (t) {
          var e = this;
          t.forEach(function (t, i) {
            (t.__slideVideoInfo = B(t.src, !!t.video, i)),
              t.__slideVideoInfo &&
                e.settings.loadYouTubePoster &&
                !t.poster &&
                t.__slideVideoInfo.youtube &&
                (t.poster =
                  "//img.youtube.com/vi/" +
                  t.__slideVideoInfo.youtube[1] +
                  "/maxresdefault.jpg");
          });
        }),
        (E.prototype.loadContent = function (t, i) {
          var n = this,
            o = this.galleryItems[t],
            r = C(this.getSlideItemId(t)),
            l = o.poster,
            a = o.srcset,
            c = o.sizes,
            d = o.sources,
            u = o.src,
            h = o.video,
            g = h && "string" == typeof h ? JSON.parse(h) : h;
          if (o.responsive) {
            var m = o.responsive.split(",");
            u = q(m) || u;
          }
          var p = o.__slideVideoInfo,
            f = "",
            v = !!o.iframe,
            y = !this.lGalleryOn,
            b = 0;
          if (
            (y &&
              (b =
                this.zoomFromOrigin && this.currentImageSize
                  ? this.settings.startAnimationDuration + 10
                  : this.settings.backdropDuration + 10),
            !r.hasClass("lg-loaded"))
          ) {
            if (p) {
              var S = this.mediaContainerPosition,
                w = S.top,
                E = S.bottom,
                I = L(
                  this.items[t],
                  this.outer,
                  w + E,
                  p && this.settings.videoMaxSize
                );
              f = this.getVideoContStyle(I);
            }
            if (v) {
              var x = T(
                this.settings.iframeWidth,
                this.settings.iframeHeight,
                this.settings.iframeMaxWidth,
                this.settings.iframeMaxHeight,
                u,
                o.iframeTitle
              );
              r.prepend(x);
            } else if (l) {
              var A = "";
              y &&
                this.zoomFromOrigin &&
                this.currentImageSize &&
                (A = this.getDummyImageContent(r, t, ""));
              x = O(l, A || "", f, this.settings.strings.playVideo, p);
              r.prepend(x);
            } else if (p) {
              x = '<div class="lg-video-cont " style="' + f + '"></div>';
              r.prepend(x);
            } else if ((this.setImgMarkup(u, r, t), a || d)) {
              var D = r.find(".lg-object");
              this.initPictureFill(D);
            }
            (l || p) &&
              this.LGel.trigger(s, {
                index: t,
                src: u,
                html5Video: g,
                hasPoster: !!l,
              }),
              this.LGel.trigger(e, { index: t }),
              this.lGalleryOn &&
                ".lg-item" === this.settings.appendSubHtmlTo &&
                this.addHtml(t);
          }
          var M = 0;
          b && !C(document.body).hasClass("lg-from-hash") && (M = b),
            this.isFirstSlideWithZoomAnimation() &&
              (setTimeout(function () {
                r.removeClass(
                  "lg-start-end-progress lg-start-progress"
                ).removeAttr("style");
              }, this.settings.startAnimationDuration + 100),
              r.hasClass("lg-loaded") ||
                setTimeout(function () {
                  if ("image" === n.getSlideType(o)) {
                    var e = o.alt,
                      i = e ? 'alt="' + e + '"' : "";
                    if (
                      (r
                        .find(".lg-img-wrap")
                        .append(k(t, u, i, a, c, o.sources)),
                      a || d)
                    ) {
                      var s = r.find(".lg-object");
                      n.initPictureFill(s);
                    }
                  }
                  ("image" === n.getSlideType(o) ||
                    ("video" === n.getSlideType(o) && l)) &&
                    (n.onLgObjectLoad(r, t, b, M, !0, !1),
                    n.onSlideObjectLoad(
                      r,
                      !(!p || !p.html5 || l),
                      function () {
                        n.loadContentOnFirstSlideLoad(t, r, M);
                      },
                      function () {
                        n.loadContentOnFirstSlideLoad(t, r, M);
                      }
                    ));
                }, this.settings.startAnimationDuration + 100)),
            r.addClass("lg-loaded"),
            (this.isFirstSlideWithZoomAnimation() &&
              ("video" !== this.getSlideType(o) || l)) ||
              this.onLgObjectLoad(r, t, b, M, y, !(!p || !p.html5 || l)),
            (this.zoomFromOrigin && this.currentImageSize) ||
              !r.hasClass("lg-complete_") ||
              this.lGalleryOn ||
              setTimeout(function () {
                r.addClass("lg-complete");
              }, this.settings.backdropDuration),
            (this.lGalleryOn = !0),
            !0 === i &&
              (r.hasClass("lg-complete_")
                ? this.preload(t)
                : r
                    .find(".lg-object")
                    .first()
                    .on("load.lg error.lg", function () {
                      n.preload(t);
                    }));
        }),
        (E.prototype.loadContentOnFirstSlideLoad = function (t, e, i) {
          var s = this;
          setTimeout(function () {
            e.find(".lg-dummy-img").remove(),
              e.removeClass("lg-first-slide"),
              s.outer.removeClass("lg-first-slide-loading"),
              (s.isDummyImageRemoved = !0),
              s.preload(t);
          }, i + 300);
        }),
        (E.prototype.getItemsToBeInsertedToDom = function (t, e, i) {
          var s = this;
          void 0 === i && (i = 0);
          var n = [],
            o = Math.max(i, 3);
          o = Math.min(o, this.galleryItems.length);
          var r = "lg-item-" + this.lgId + "-" + e;
          if (this.galleryItems.length <= 3)
            return (
              this.galleryItems.forEach(function (t, e) {
                n.push("lg-item-" + s.lgId + "-" + e);
              }),
              n
            );
          if (t < (this.galleryItems.length - 1) / 2) {
            for (var l = t; l > t - o / 2 && l >= 0; l--)
              n.push("lg-item-" + this.lgId + "-" + l);
            var a = n.length;
            for (l = 0; l < o - a; l++)
              n.push("lg-item-" + this.lgId + "-" + (t + l + 1));
          } else {
            for (l = t; l <= this.galleryItems.length - 1 && l < t + o / 2; l++)
              n.push("lg-item-" + this.lgId + "-" + l);
            for (a = n.length, l = 0; l < o - a; l++)
              n.push("lg-item-" + this.lgId + "-" + (t - l - 1));
          }
          return (
            this.settings.loop &&
              (t === this.galleryItems.length - 1
                ? n.push("lg-item-" + this.lgId + "-0")
                : 0 === t &&
                  n.push(
                    "lg-item-" +
                      this.lgId +
                      "-" +
                      (this.galleryItems.length - 1)
                  )),
            -1 === n.indexOf(r) && n.push("lg-item-" + this.lgId + "-" + e),
            n
          );
        }),
        (E.prototype.organizeSlideItems = function (t, e) {
          var i = this,
            s = this.getItemsToBeInsertedToDom(
              t,
              e,
              this.settings.numberOfSlideItemsInDom
            );
          return (
            s.forEach(function (t) {
              -1 === i.currentItemsInDom.indexOf(t) &&
                i.$inner.append('<div id="' + t + '" class="lg-item"></div>');
            }),
            this.currentItemsInDom.forEach(function (t) {
              -1 === s.indexOf(t) && C("#" + t).remove();
            }),
            s
          );
        }),
        (E.prototype.getPreviousSlideIndex = function () {
          var t = 0;
          try {
            var e = this.outer.find(".lg-current").first().attr("id");
            t = parseInt(e.split("-")[3]) || 0;
          } catch (e) {
            t = 0;
          }
          return t;
        }),
        (E.prototype.setDownloadValue = function (t) {
          if (this.settings.download) {
            var e = this.galleryItems[t];
            if (!1 === e.downloadUrl || "false" === e.downloadUrl)
              this.outer.addClass("lg-hide-download");
            else {
              var i = this.getElementById("lg-download");
              this.outer.removeClass("lg-hide-download"),
                i.attr("href", e.downloadUrl || e.src),
                e.download && i.attr("download", e.download);
            }
          }
        }),
        (E.prototype.makeSlideAnimation = function (t, e, i) {
          var s = this;
          this.lGalleryOn && i.addClass("lg-slide-progress"),
            setTimeout(
              function () {
                s.outer.addClass("lg-no-trans"),
                  s.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-next-slide"),
                  "prev" === t
                    ? (e.addClass("lg-prev-slide"), i.addClass("lg-next-slide"))
                    : (e.addClass("lg-next-slide"),
                      i.addClass("lg-prev-slide")),
                  setTimeout(function () {
                    s.outer.find(".lg-item").removeClass("lg-current"),
                      e.addClass("lg-current"),
                      s.outer.removeClass("lg-no-trans");
                  }, 50);
              },
              this.lGalleryOn ? this.settings.slideDelay : 0
            );
        }),
        (E.prototype.slide = function (t, e, i, s) {
          var n = this,
            o = this.getPreviousSlideIndex();
          if (
            ((this.currentItemsInDom = this.organizeSlideItems(t, o)),
            !this.lGalleryOn || o !== t)
          ) {
            var r = this.galleryItems.length;
            if (!this.lgBusy) {
              this.settings.counter && this.updateCurrentCounter(t);
              var l = this.getSlideItem(t),
                a = this.getSlideItem(o),
                c = this.galleryItems[t],
                h = c.__slideVideoInfo;
              if (
                (this.outer.attr("data-lg-slide-type", this.getSlideType(c)),
                this.setDownloadValue(t),
                h)
              ) {
                var g = this.mediaContainerPosition,
                  m = g.top,
                  p = g.bottom,
                  f = L(
                    this.items[t],
                    this.outer,
                    m + p,
                    h && this.settings.videoMaxSize
                  );
                this.resizeVideoSlide(t, f);
              }
              if (
                (this.LGel.trigger(d, {
                  prevIndex: o,
                  index: t,
                  fromTouch: !!e,
                  fromThumb: !!i,
                }),
                (this.lgBusy = !0),
                clearTimeout(this.hideBarTimeout),
                this.arrowDisable(t),
                s || (t < o ? (s = "prev") : t > o && (s = "next")),
                e)
              ) {
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-prev-slide lg-current lg-next-slide");
                var v = void 0,
                  y = void 0;
                r > 2
                  ? ((v = t - 1),
                    (y = t + 1),
                    ((0 === t && o === r - 1) || (t === r - 1 && 0 === o)) &&
                      ((y = 0), (v = r - 1)))
                  : ((v = 0), (y = 1)),
                  "prev" === s
                    ? this.getSlideItem(y).addClass("lg-next-slide")
                    : this.getSlideItem(v).addClass("lg-prev-slide"),
                  l.addClass("lg-current");
              } else this.makeSlideAnimation(s, l, a);
              this.lGalleryOn
                ? setTimeout(function () {
                    n.loadContent(t, !0),
                      ".lg-item" !== n.settings.appendSubHtmlTo && n.addHtml(t);
                  }, this.settings.speed +
                    50 +
                    (e ? 0 : this.settings.slideDelay))
                : this.loadContent(t, !0),
                setTimeout(function () {
                  (n.lgBusy = !1),
                    a.removeClass("lg-slide-progress"),
                    n.LGel.trigger(u, {
                      prevIndex: o,
                      index: t,
                      fromTouch: e,
                      fromThumb: i,
                    });
                }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                  (e ? 0 : this.settings.slideDelay));
            }
            this.index = t;
          }
        }),
        (E.prototype.updateCurrentCounter = function (t) {
          this.getElementById("lg-counter-current").html(t + 1 + "");
        }),
        (E.prototype.updateCounterTotal = function () {
          this.getElementById("lg-counter-all").html(
            this.galleryItems.length + ""
          );
        }),
        (E.prototype.getSlideType = function (t) {
          return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image";
        }),
        (E.prototype.touchMove = function (t, e, i) {
          var s = e.pageX - t.pageX,
            n = e.pageY - t.pageY,
            o = !1;
          if (
            (this.swipeDirection
              ? (o = !0)
              : Math.abs(s) > 15
              ? ((this.swipeDirection = "horizontal"), (o = !0))
              : Math.abs(n) > 15 &&
                ((this.swipeDirection = "vertical"), (o = !0)),
            o)
          ) {
            var r = this.getSlideItem(this.index);
            if ("horizontal" === this.swipeDirection) {
              null == i || i.preventDefault(),
                this.outer.addClass("lg-dragging"),
                this.setTranslate(r, s, 0);
              var l = r.get().offsetWidth,
                a = (15 * l) / 100 - Math.abs((10 * s) / 100);
              this.setTranslate(
                this.outer.find(".lg-prev-slide").first(),
                -l + s - a,
                0
              ),
                this.setTranslate(
                  this.outer.find(".lg-next-slide").first(),
                  l + s + a,
                  0
                );
            } else if (
              "vertical" === this.swipeDirection &&
              this.settings.swipeToClose
            ) {
              null == i || i.preventDefault(),
                this.$container.addClass("lg-dragging-vertical");
              var c = 1 - Math.abs(n) / window.innerHeight;
              this.$backdrop.css("opacity", c);
              var d = 1 - Math.abs(n) / (2 * window.innerWidth);
              this.setTranslate(r, 0, n, d, d),
                Math.abs(n) > 100 &&
                  this.outer
                    .addClass("lg-hide-items")
                    .removeClass("lg-components-open");
            }
          }
        }),
        (E.prototype.touchEnd = function (t, e, i) {
          var s,
            n = this;
          "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"),
            setTimeout(function () {
              n.$container.removeClass("lg-dragging-vertical"),
                n.outer
                  .removeClass("lg-dragging lg-hide-items")
                  .addClass("lg-components-open");
              var o = !0;
              if ("horizontal" === n.swipeDirection) {
                s = t.pageX - e.pageX;
                var r = Math.abs(t.pageX - e.pageX);
                s < 0 && r > n.settings.swipeThreshold
                  ? (n.goToNextSlide(!0), (o = !1))
                  : s > 0 &&
                    r > n.settings.swipeThreshold &&
                    (n.goToPrevSlide(!0), (o = !1));
              } else if ("vertical" === n.swipeDirection) {
                if (
                  ((s = Math.abs(t.pageY - e.pageY)),
                  n.settings.closable && n.settings.swipeToClose && s > 100)
                )
                  return void n.closeGallery();
                n.$backdrop.css("opacity", 1);
              }
              if (
                (n.outer.find(".lg-item").removeAttr("style"),
                o && Math.abs(t.pageX - e.pageX) < 5)
              ) {
                var l = C(i.target);
                n.isPosterElement(l) && n.LGel.trigger(h);
              }
              n.swipeDirection = void 0;
            }),
            setTimeout(function () {
              n.outer.hasClass("lg-dragging") ||
                "lg-slide" === n.settings.mode ||
                n.outer.removeClass("lg-slide");
            }, this.settings.speed + 100);
        }),
        (E.prototype.enableSwipe = function () {
          var t = this,
            e = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableSwipe &&
            (this.$inner.on("touchstart.lg", function (i) {
              t.dragOrSwipeEnabled = !0;
              var s = t.getSlideItem(t.index);
              (!C(i.target).hasClass("lg-item") &&
                !s.get().contains(i.target)) ||
                t.outer.hasClass("lg-zoomed") ||
                t.lgBusy ||
                1 !== i.touches.length ||
                ((n = !0),
                (t.touchAction = "swipe"),
                t.manageSwipeClass(),
                (e = { pageX: i.touches[0].pageX, pageY: i.touches[0].pageY }));
            }),
            this.$inner.on("touchmove.lg", function (o) {
              n &&
                "swipe" === t.touchAction &&
                1 === o.touches.length &&
                ((i = { pageX: o.touches[0].pageX, pageY: o.touches[0].pageY }),
                t.touchMove(e, i, o),
                (s = !0));
            }),
            this.$inner.on("touchend.lg", function (o) {
              if ("swipe" === t.touchAction) {
                if (s) (s = !1), t.touchEnd(i, e, o);
                else if (n) {
                  var r = C(o.target);
                  t.isPosterElement(r) && t.LGel.trigger(h);
                }
                (t.touchAction = void 0), (n = !1);
              }
            }));
        }),
        (E.prototype.enableDrag = function () {
          var t = this,
            e = {},
            i = {},
            s = !1,
            n = !1;
          this.settings.enableDrag &&
            (this.outer.on("mousedown.lg", function (i) {
              t.dragOrSwipeEnabled = !0;
              var n = t.getSlideItem(t.index);
              (C(i.target).hasClass("lg-item") || n.get().contains(i.target)) &&
                (t.outer.hasClass("lg-zoomed") ||
                  t.lgBusy ||
                  (i.preventDefault(),
                  t.lgBusy ||
                    (t.manageSwipeClass(),
                    (e = { pageX: i.pageX, pageY: i.pageY }),
                    (s = !0),
                    (t.outer.get().scrollLeft += 1),
                    (t.outer.get().scrollLeft -= 1),
                    t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                    t.LGel.trigger(g))));
            }),
            C(window).on("mousemove.lg.global" + this.lgId, function (o) {
              s &&
                t.lgOpened &&
                ((n = !0),
                (i = { pageX: o.pageX, pageY: o.pageY }),
                t.touchMove(e, i),
                t.LGel.trigger(m));
            }),
            C(window).on("mouseup.lg.global" + this.lgId, function (o) {
              if (t.lgOpened) {
                var r = C(o.target);
                n
                  ? ((n = !1), t.touchEnd(i, e, o), t.LGel.trigger(p))
                  : t.isPosterElement(r) && t.LGel.trigger(h),
                  s &&
                    ((s = !1),
                    t.outer.removeClass("lg-grabbing").addClass("lg-grab"));
              }
            }));
        }),
        (E.prototype.triggerPosterClick = function () {
          var t = this;
          this.$inner.on("click.lg", function (e) {
            !t.dragOrSwipeEnabled &&
              t.isPosterElement(C(e.target)) &&
              t.LGel.trigger(h);
          });
        }),
        (E.prototype.manageSwipeClass = function () {
          var t = this.index + 1,
            e = this.index - 1;
          this.settings.loop &&
            this.galleryItems.length > 2 &&
            (0 === this.index
              ? (e = this.galleryItems.length - 1)
              : this.index === this.galleryItems.length - 1 && (t = 0)),
            this.outer
              .find(".lg-item")
              .removeClass("lg-next-slide lg-prev-slide"),
            e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"),
            this.getSlideItem(t).addClass("lg-next-slide");
        }),
        (E.prototype.goToNextSlide = function (t) {
          var e = this,
            i = this.settings.loop;
          t && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index + 1 < this.galleryItems.length
                ? (this.index++,
                  this.LGel.trigger(f, { index: this.index }),
                  this.slide(this.index, !!t, !1, "next"))
                : i
                ? ((this.index = 0),
                  this.LGel.trigger(f, { index: this.index }),
                  this.slide(this.index, !!t, !1, "next"))
                : this.settings.slideEndAnimation &&
                  !t &&
                  (this.outer.addClass("lg-right-end"),
                  setTimeout(function () {
                    e.outer.removeClass("lg-right-end");
                  }, 400)));
        }),
        (E.prototype.goToPrevSlide = function (t) {
          var e = this,
            i = this.settings.loop;
          t && this.galleryItems.length < 3 && (i = !1),
            this.lgBusy ||
              (this.index > 0
                ? (this.index--,
                  this.LGel.trigger(v, { index: this.index, fromTouch: t }),
                  this.slide(this.index, !!t, !1, "prev"))
                : i
                ? ((this.index = this.galleryItems.length - 1),
                  this.LGel.trigger(v, { index: this.index, fromTouch: t }),
                  this.slide(this.index, !!t, !1, "prev"))
                : this.settings.slideEndAnimation &&
                  !t &&
                  (this.outer.addClass("lg-left-end"),
                  setTimeout(function () {
                    e.outer.removeClass("lg-left-end");
                  }, 400)));
        }),
        (E.prototype.keyPress = function () {
          var t = this;
          C(window).on("keydown.lg.global" + this.lgId, function (e) {
            t.lgOpened &&
              !0 === t.settings.escKey &&
              27 === e.keyCode &&
              (e.preventDefault(),
              t.settings.allowMediaOverlap &&
              t.outer.hasClass("lg-can-toggle") &&
              t.outer.hasClass("lg-components-open")
                ? t.outer.removeClass("lg-components-open")
                : t.closeGallery()),
              t.lgOpened &&
                t.galleryItems.length > 1 &&
                (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()),
                39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()));
          });
        }),
        (E.prototype.arrow = function () {
          var t = this;
          this.getElementById("lg-prev").on("click.lg", function () {
            t.goToPrevSlide();
          }),
            this.getElementById("lg-next").on("click.lg", function () {
              t.goToNextSlide();
            });
        }),
        (E.prototype.arrowDisable = function (t) {
          if (!this.settings.loop && this.settings.hideControlOnEnd) {
            var e = this.getElementById("lg-prev"),
              i = this.getElementById("lg-next");
            t + 1 === this.galleryItems.length
              ? i.attr("disabled", "disabled").addClass("disabled")
              : i.removeAttr("disabled").removeClass("disabled"),
              0 === t
                ? e.attr("disabled", "disabled").addClass("disabled")
                : e.removeAttr("disabled").removeClass("disabled");
          }
        }),
        (E.prototype.setTranslate = function (t, e, i, s, n) {
          void 0 === s && (s = 1),
            void 0 === n && (n = 1),
            t.css(
              "transform",
              "translate3d(" +
                e +
                "px, " +
                i +
                "px, 0px) scale3d(" +
                s +
                ", " +
                n +
                ", 1)"
            );
        }),
        (E.prototype.mousewheel = function () {
          var t = this,
            e = 0;
          this.outer.on("wheel.lg", function (i) {
            if (i.deltaY && !(t.galleryItems.length < 2)) {
              i.preventDefault();
              var s = new Date().getTime();
              s - e < 1e3 ||
                ((e = s),
                i.deltaY > 0
                  ? t.goToNextSlide()
                  : i.deltaY < 0 && t.goToPrevSlide());
            }
          });
        }),
        (E.prototype.isSlideElement = function (t) {
          return (
            t.hasClass("lg-outer") ||
            t.hasClass("lg-item") ||
            t.hasClass("lg-img-wrap")
          );
        }),
        (E.prototype.isPosterElement = function (t) {
          var e = this.getSlideItem(this.index)
            .find(".lg-video-play-button")
            .get();
          return (
            t.hasClass("lg-video-poster") ||
            t.hasClass("lg-video-play-button") ||
            (e && e.contains(t.get()))
          );
        }),
        (E.prototype.toggleMaximize = function () {
          var t = this;
          this.getElementById("lg-maximize").on("click.lg", function () {
            t.$container.toggleClass("lg-inline"), t.refreshOnResize();
          });
        }),
        (E.prototype.invalidateItems = function () {
          for (var t = 0; t < this.items.length; t++) {
            var e = C(this.items[t]);
            e.off("click.lgcustom-item-" + e.attr("data-lg-id"));
          }
        }),
        (E.prototype.trapFocus = function () {
          var t = this;
          this.$container.get().focus({ preventScroll: !0 }),
            C(window).on("keydown.lg.global" + this.lgId, function (e) {
              if (t.lgOpened && ("Tab" === e.key || 9 === e.keyCode)) {
                var i = D(t.$container.get()),
                  s = i[0],
                  n = i[i.length - 1];
                e.shiftKey
                  ? document.activeElement === s &&
                    (n.focus(), e.preventDefault())
                  : document.activeElement === n &&
                    (s.focus(), e.preventDefault());
              }
            });
        }),
        (E.prototype.manageCloseGallery = function () {
          var t = this;
          if (this.settings.closable) {
            var e = !1;
            this.getElementById("lg-close").on("click.lg", function () {
              t.closeGallery();
            }),
              this.settings.closeOnTap &&
                (this.outer.on("mousedown.lg", function (i) {
                  var s = C(i.target);
                  e = !!t.isSlideElement(s);
                }),
                this.outer.on("mousemove.lg", function () {
                  e = !1;
                }),
                this.outer.on("mouseup.lg", function (i) {
                  var s = C(i.target);
                  t.isSlideElement(s) &&
                    e &&
                    (t.outer.hasClass("lg-dragging") || t.closeGallery());
                }));
          }
        }),
        (E.prototype.closeGallery = function (t) {
          var e = this;
          if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
          this.LGel.trigger(y),
            this.settings.resetScrollPosition &&
              !this.settings.hideScrollbar &&
              C(window).scrollTop(this.prevScrollTop);
          var i,
            s = this.items[this.index];
          if (this.zoomFromOrigin && s) {
            var n = this.mediaContainerPosition,
              o = n.top,
              r = n.bottom,
              l = this.galleryItems[this.index],
              a = l.__slideVideoInfo,
              c = l.poster,
              d = L(s, this.outer, o + r, a && c && this.settings.videoMaxSize);
            i = x(s, this.outer, o, r, d);
          }
          this.zoomFromOrigin && i
            ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
              this.getSlideItem(this.index)
                .addClass("lg-start-end-progress")
                .css(
                  "transition-duration",
                  this.settings.startAnimationDuration + "ms"
                )
                .css("transform", i))
            : (this.outer.addClass("lg-hide-items"),
              this.outer.removeClass("lg-zoom-from-image")),
            this.destroyModules(),
            (this.lGalleryOn = !1),
            (this.isDummyImageRemoved = !1),
            (this.zoomFromOrigin = this.settings.zoomFromOrigin),
            clearTimeout(this.hideBarTimeout),
            (this.hideBarTimeout = !1),
            C("html").removeClass("lg-on"),
            this.outer.removeClass("lg-visible lg-components-open"),
            this.$backdrop.removeClass("in").css("opacity", 0);
          var u =
            this.zoomFromOrigin && i
              ? Math.max(
                  this.settings.startAnimationDuration,
                  this.settings.backdropDuration
                )
              : this.settings.backdropDuration;
          return (
            this.$container.removeClass("lg-show-in"),
            setTimeout(function () {
              e.zoomFromOrigin &&
                i &&
                e.outer.removeClass("lg-zoom-from-image"),
                e.$container.removeClass("lg-show"),
                e.resetScrollBar(),
                e.$backdrop
                  .removeAttr("style")
                  .css(
                    "transition-duration",
                    e.settings.backdropDuration + "ms"
                  ),
                e.outer.removeClass("lg-closing " + e.settings.startClass),
                e.getSlideItem(e.index).removeClass("lg-start-end-progress"),
                e.$inner.empty(),
                e.lgOpened && e.LGel.trigger(b, { instance: e }),
                e.$container.get() && e.$container.get().blur(),
                (e.lgOpened = !1);
            }, u + 100),
            u + 100
          );
        }),
        (E.prototype.initModules = function () {
          this.plugins.forEach(function (t) {
            try {
              t.init();
            } catch (t) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly initiated"
              );
            }
          });
        }),
        (E.prototype.destroyModules = function (t) {
          this.plugins.forEach(function (e) {
            try {
              t ? e.destroy() : e.closeGallery && e.closeGallery();
            } catch (t) {
              console.warn(
                "lightGallery:- make sure lightGallery module is properly destroyed"
              );
            }
          });
        }),
        (E.prototype.refresh = function (t) {
          this.settings.dynamic || this.invalidateItems(),
            (this.galleryItems = t || this.getItems()),
            this.updateControls(),
            this.openGalleryOnItemClick(),
            this.LGel.trigger(o);
        }),
        (E.prototype.updateControls = function () {
          this.addSlideVideoInfo(this.galleryItems),
            this.updateCounterTotal(),
            this.manageSingleSlideClassName();
        }),
        (E.prototype.destroyGallery = function () {
          this.destroyModules(!0),
            this.settings.dynamic || this.invalidateItems(),
            C(window).off(".lg.global" + this.lgId),
            this.LGel.off(".lg"),
            this.$container.remove();
        }),
        (E.prototype.destroy = function () {
          var t = this.closeGallery(!0);
          return (
            t
              ? setTimeout(this.destroyGallery.bind(this), t)
              : this.destroyGallery(),
            t
          );
        }),
        E
      );
    })();
  const G = function (t, e) {
    return new _(t, e);
  };
  let F = !1;
  setTimeout(() => {
    if (F) {
      let t = new Event("windowScroll");
      window.addEventListener("scroll", function (e) {
        document.dispatchEvent(t);
      });
    }
  }, 0);
  const H = document.querySelectorAll("[data-gallery]");
  G(document.getElementById("lightgallery"), {
    selector: H,
    mode: "lg-slide",
    download: !1,
    autoplay: !1,
  }),
    $(function () {
      const t = document.documentElement.lang;
      if (null !== document.querySelector(".main_form")) {
        const i = (t) => {
          document.querySelectorAll(".form-step").forEach((t) => {
            t.classList.add("d-none");
          }),
            document.querySelectorAll(".form-stepper-list").forEach((t) => {
              t.classList.add("form-stepper-unfinished"),
                t.classList.remove(
                  "form-stepper-active",
                  "form-stepper-completed"
                );
            }),
            document.querySelector("#step-" + t).classList.remove("d-none");
          const e = document.querySelector('li[step="' + t + '"]');
          e.classList.remove(
            "form-stepper-unfinished",
            "form-stepper-completed"
          ),
            e.classList.add("form-stepper-active");
          for (let e = 0; e < t; e++) {
            const t = document.querySelector('li[step="' + e + '"]');
            t &&
              (t.classList.remove(
                "form-stepper-unfinished",
                "form-stepper-active"
              ),
              t.classList.add("form-stepper-completed"));
          }
        };
        document.querySelectorAll(".btn-navigate-form-step").forEach((t) => {
          t.addEventListener("click", () => {
            const e = parseInt(t.getAttribute("step_number"));
            i(e);
          });
        });
      }
      if (
        (null !== document.querySelector(".filters-section") &&
          window.addEventListener("scroll", function () {
            var t = document.querySelector(".filters-section"),
              e = document.querySelector(".characteristics_main").offsetTop;
            window.pageYOffset >= e
              ? t.classList.add("sticky")
              : t.classList.remove("sticky");
          }),
        null !== document.querySelector(".product_list"))
      )
        new Swiper(".mySwiperlevel", {
          direction: "vertical",
          speed: 1e3,
          pagination: { el: ".swiper-pagination", clickable: !0 },
          allowTouchMove: !1,
          autoplay: { delay: 5e3, disableOnInteraction: !1 },
        });
      if (null !== document.querySelector(".product_list")) {
        document
          .querySelector(".product_list")
          .querySelectorAll(".product-swiper")
          .forEach((t, e) => {
            $(".product-swiper").flickity({ contain: !0 });
          });
      }
      if (null !== document.querySelector(".filter-content")) {
        const s = document.querySelector(".range-filter"),
          n = document.getElementById("cena-number1");
        s.addEventListener("input", function () {
          n.value = s.value;
        });
        const o = document.querySelectorAll(".filter_btns"),
          r = document.querySelectorAll(".filter-content");
        document.querySelectorAll(".btn-close-filter").forEach((t, e) => {
          t.addEventListener("click", () => {
            r.forEach((t) => {
              t.classList.remove("active");
            });
          });
        }),
          o.forEach((t, e) => {
            t.addEventListener("click", () => {
              return (
                (t = e),
                o.forEach((e, i) => {
                  e.classList.contains("active")
                    ? e.classList.remove("active", i === t)
                    : e.classList.toggle("active", i === t);
                }),
                void r.forEach((e, i) => {
                  e.classList.contains("active")
                    ? e.classList.remove("active", i === t)
                    : e.classList.toggle("active", i === t);
                })
              );
              var t;
            });
          });
      }
      if (null !== document.querySelector(".filter-content")) {
        const l = document.querySelectorAll(".radio-room1 > div label"),
          a = document.querySelectorAll(".radio > div label"),
          c = document.querySelector(".btn-reset");
        l.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              void l.forEach((e, i) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", i === t)
                  : e.classList.toggle("active", i === t);
              })
            );
            var t;
          });
        });
        const d = document.querySelectorAll(".radio-room2 > div label");
        d.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              void d.forEach((e, i) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", i === t)
                  : e.classList.toggle("active", i === t);
              })
            );
            var t;
          });
        });
        const u = document.querySelectorAll(".radio-room3 > div label");
        u.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              void u.forEach((e, i) => {
                e.classList.remove("active", i === t),
                  e.classList.toggle("active", i === t);
              })
            );
            var t;
          });
        }),
          c.addEventListener("click", () => {
            a.forEach((t) => {
              t.classList.remove("active");
            });
          });
      }
      if (null !== document.querySelector(".content-city")) {
        const h = document.querySelectorAll(".content-city > div label");
        document.querySelectorAll(".content-city > div input");
        h.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              void h.forEach((e, i) => {
                e.classList.contains("active")
                  ? e.classList.remove("active", i === t)
                  : (e.classList.toggle("active", i === t),
                    i === t &&
                      (document.querySelector(".filter-city-btn").textContent =
                        e.textContent));
              })
            );
            var t;
          });
        });
      }
      if (null !== document.querySelector(".content-city")) {
        const g = document.querySelectorAll(".is-city--item > label");
        g.forEach((t, e) => {
          t.addEventListener("click", () => {
            g.forEach((t, i) => {
              t.classList.remove("active"),
                i === e && t.classList.add("active");
            });
          });
        });
      }
      if (
        (null !== document.querySelector(".select-city-btn") &&
          document
            .querySelector(".select-city-btn")
            .addEventListener("click", function () {
              const t = document.querySelector(".is-city--item > label.active");
              t &&
                (document.querySelector(".filter_btn.filter_btns").innerText =
                  t.textContent.trim());
            }),
        null !== document.querySelector(".js-range-slider") &&
          $(".js-range-slider").ionRangeSlider({
            skin: "round",
            onFinish: function (t) {
              const e = t.from + " - " + t.to,
                [i, s] = e.split(" - ");
              $("#cena-number1").val(i), $("#cena-number2").val(s);
            },
          }),
        null !== document.querySelector(".content-people") &&
          (function (t) {
            (t.fn.numberstyle = function (e) {
              var i = 8;
              t(this).hasClass("age") && (i = 10),
                t(this).find("input").attr({ max: i, min: 0 }),
                t(this).prepend("<div class='btn btn-min'>-</div>"),
                t(this).append("<div class='btn btn-add'>+</div>");
              var s = t(this).find("input");
              parseFloat(s.val()) == t(this).find("input").attr("min") &&
                t(this).parent().find(".btn-min").addClass("disabled"),
                parseFloat(s.val()) == t(this).find("input").attr("max") &&
                  t(this).parent().find(".btn-add").addClass("disabled");
            }),
              t(".ci-input-number").each(function (e, i) {
                t(this).numberstyle();
              }),
              t(".btn-add").on("click", function () {
                var e = t(this).parent().find("input"),
                  i = parseFloat(e.val());
                if (i < e.attr("max")) {
                  var s = t(this).parent().find(".btn-min");
                  s.hasClass("disabled") && s.removeClass("disabled");
                  var n = i + 1;
                  e.val(n), n == e.attr("max") && t(this).addClass("disabled");
                }
              }),
              t(".btn-min").on("click", function () {
                var e = t(this).parent().find("input"),
                  i = parseFloat(e.val());
                if (i > e.attr("min")) {
                  var s = t(this).parent().find(".btn-add");
                  s.hasClass("disabled") && s.removeClass("disabled");
                  var n = i - 1;
                  e.val(n), n == e.attr("min") && t(this).addClass("disabled");
                }
              });
          })(jQuery),
        null !== document.querySelector(".search"))
      ) {
        const m = document.querySelectorAll("[data-search]"),
          p = document.querySelector(".header"),
          f = p.querySelector(".search"),
          v = p.querySelector(".btn-map"),
          y = p.querySelectorAll(".btn-filters1");
        function b() {
          f.classList.remove("active"),
            setTimeout(function () {
              f.classList.contains("active") ||
                (null !== v && v.classList.remove("hide"),
                null !== y && y.classList.remove("hide"));
            }, 500);
        }
        function S() {
          f.classList.add("active"),
            v.classList.add("hide"),
            y.classList.add("hide");
        }
        m.forEach((t) => {
          t.addEventListener("click", S);
        }),
          document.addEventListener("click", (t) => {
            const e = f.contains(t.target),
              i = Array.from(m).some((e) => e.contains(t.target));
            e || i || b();
          }),
          document.addEventListener("keydown", (t) => {
            "Escape" === t.code && f.classList.contains("active") && b();
          });
      }
      if (null !== document.querySelector(".map-popup")) {
        const w = document.querySelectorAll("[data-modal]"),
          C = document.querySelector(".map-popup"),
          E = C.querySelectorAll("[data-close]");
        function I() {
          C.classList.remove("active"), (document.body.style.overflow = "");
        }
        function L() {
          C.classList.add("active"), (document.body.style.overflow = "hidden");
        }
        w.forEach((t) => {
          t.addEventListener("click", L);
        }),
          E.forEach((t) => {
            t.addEventListener("click", I);
          }),
          document.addEventListener("click", (t) => {
            const e = C.contains(t.target),
              i = Array.from(w).some((e) => e.contains(t.target));
            e || i || I();
          }),
          document.addEventListener("keydown", (t) => {
            "Escape" === t.code && C.classList.contains("active") && I();
          });
      }
      if (null !== document.querySelector(".mySwiper-media")) {
        new Swiper(".mySwiper-media", {
          spaceBetween: 20,
          speed: 1e3,
          navigation: {
            nextEl: ".swiper-button-next-media",
            prevEl: ".swiper-button-prev-media",
          },
          breakpoints: {
            1: { slidesPerView: 1 },
            480: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1e3: { slidesPerView: 4 },
          },
        });
      }
      if (null !== document.querySelector(".objects-list")) {
        new Swiper(".objects-list", {
          spaceBetween: 28,
          speed: 1e3,
          breakpoints: {
            1: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          },
        });
      }
      if (null !== document.querySelector(".objects-list2")) {
        new Swiper(".objects-list2", {
          spaceBetween: 28,
          speed: 1e3,
          breakpoints: {
            1: { slidesPerView: 1 },
            500: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          },
        });
      }
      if (null !== document.querySelector(".circle-container")) {
        function x(t) {
          t.forEach((t) => {
            t.isIntersecting && (t.target.classList.add("active"), q());
          });
        }
        let T = new IntersectionObserver(x, { threshold: [0.6] }),
          k = document.querySelectorAll(".circle-animation");
        for (let A of k) T.observe(A);
        function q() {
          document.querySelectorAll(".circle-container").forEach((t) => {
            if (t.classList.contains("active")) {
              const e = 36,
                i = 150,
                s = (2 * Math.PI) / e;
              for (let n = 0; n < e; n++) {
                const e = document.createElement("div");
                (e.className = "stripe"),
                  (e.style.transform = `rotate(${
                    s * n - Math.PI / 2
                  }rad) translate(${i}px) rotate(${Math.PI / 2}rad)`),
                  t.appendChild(e),
                  setTimeout(function () {
                    e.style.opacity = 1;
                  }, 50 * (n + 1)),
                  ((t) => 36) &&
                    setTimeout(function () {
                      t.querySelector(".text").style.opacity = 1;
                    }, 1500);
              }
            }
          });
        }
      }
      if (null !== document.querySelector(".element-animation")) {
        function O(t) {
          t.forEach((t) => {
            t.isIntersecting
              ? t.target.classList.add("active")
              : t.target.classList.remove("active");
          });
        }
        let D = new IntersectionObserver(O, { threshold: [0.6] }),
          M = document.querySelectorAll(".element-animation");
        for (let z of M) D.observe(z);
      }
      if (null !== document.querySelector(".burger_menu")) {
        const B = document.querySelector(".nav-container"),
          P = document.querySelector(".header-top"),
          _ = document.querySelector(".close");
        document
          .querySelector(".burger_menu")
          .addEventListener("click", function () {
            B.classList.toggle("active"), P.classList.toggle("active");
          }),
          _.addEventListener("click", function () {
            B.classList.remove("active"), P.classList.toggle("active");
          });
      }
      if (null !== document.querySelector(".btn-moreText")) {
        const G = document.querySelector(".text-hide"),
          F = document.querySelector(".btn-moreText");
        F.addEventListener("click", function () {
          G.classList.toggle("active"),
            F.classList.toggle("active"),
            G.classList.contains("active")
              ? (console.log(1), (F.textContent = "Ukryj opis"))
              : (F.textContent = "Rozwiń opis");
        });
      }
      if (
        (null !== document.querySelector(".header-bottom_filters") &&
          $(".header-bottom_filters").flickity({
            cellAlign: "left",
            contain: !0,
          }),
        null !== document.querySelector(".list-swiper") &&
          $(".list-swiper").flickity({ cellAlign: "left", contain: !0 }),
        null !== document.querySelector(".spoiler-trigger") &&
          $(document).on("click", ".spoiler-trigger", function (t) {
            t.preventDefault(),
              $(this).toggleClass("active"),
              $(this).parent().find(".spoiler-block").first().slideToggle(300);
          }),
        null !== document.querySelector(".header-top"))
      ) {
        const H = document.querySelector(".header-top").offsetHeight + "px";
        document.querySelector(".nav-container").style.marginTop = H;
      }
      if (null !== document.querySelector(".page")) {
        const N = document.querySelector(".header").offsetHeight + "px";
        document.querySelector(".page").style.marginTop = N;
      }
      const e =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (null !== document.querySelector(".btn-more-swiper") && e > 390) {
        function V() {
          const t = document.querySelector(".image-counter"),
            e = document
              .querySelector(".product-cart-swiper")
              .querySelector(".swiper-wrapper"),
            i =
              window.innerWidth ||
              document.documentElement.clientWidth ||
              document.body.clientWidth;
          let s = e.querySelectorAll(".swiper-slide").length,
            n = (e.querySelectorAll(".swiper-slide"), 5);
          i <= 768 && (n = 3),
            e.querySelectorAll(".swiper-slide").forEach(function (t) {
              t.classList.add("d-none");
            }),
            e
              .querySelectorAll(".swiper-slide:nth-child(-n+" + n + ")")
              .forEach(function (t) {
                t.classList.remove("d-none");
              }),
            e
              .querySelector(".btn-more-swiper")
              .addEventListener("click", function (o) {
                e.querySelectorAll(".swiper-slide:not(.d-none)").length == s
                  ? ((n = 5),
                    i <= 768 && (n = 3),
                    e.querySelectorAll(".swiper-slide").forEach(function (t) {
                      t.classList.add("d-none");
                    }),
                    e
                      .querySelectorAll(".swiper-slide:nth-child(-n+" + n + ")")
                      .forEach(function (t) {
                        t.classList.remove("d-none");
                      }),
                    (t.innerHTML = "+ " + (s - n)))
                  : (o.preventDefault(),
                    setTimeout(
                      function () {
                        (t.innerHTML = "- " + (s - n)),
                          (n = n + 99 <= s ? n + 99 : s),
                          e
                            .querySelectorAll(
                              ".swiper-slide:nth-child(-n+" + n + ")"
                            )
                            .forEach(function (t) {
                              t.classList.remove("d-none");
                            });
                      }.bind(this),
                      500
                    ));
              }),
            (t.innerHTML = "+ " + (s - n));
        }
        V();
      }
      if (null !== document.querySelector(".product-cart-swiper") && e <= 391) {
        const j = document.querySelector(".product-cart-swiper");
        console.log(e), j.classList.add("swiper");
        new Swiper(".product-cart-swiper", {
          slidesPerView: 1,
          speed: 1e3,
          pagination: {
            el: ".swiper-pagination-product-cart",
            type: "fraction",
          },
          navigation: {
            nextEl: ".swiper-button-next-product-cart",
            prevEl: ".swiper-button-prev-product-cart",
          },
        });
      }
      if (null !== document.querySelector("#myDatePicker")) {
        if (window.innerWidth > 768) {
          let W = !1;
          const R = flatpickr("#myDatePicker", {
            showMonths: 2,
            locale: t,
            mode: "range",
            dateFormat: "m.d.y",
            appendTo: document.body,
            onReady: function (t, e, i) {
              i.calendarContainer.parentNode.classList.add("custom-flatpickr");
            },
            onOpen: function (t, e, i) {
              if (
                ((i.calendarContainer.style.width = "655px"),
                document.addEventListener("scroll", function t() {
                  R.close(), document.removeEventListener("scroll", t);
                }),
                !W)
              ) {
                const t = document.createElement("div");
                t.innerHTML =
                  '\n                   <button id="clearButton">Clear</button>\n                   <button id="submitButton" class="btn-gold">Wybierz</button>\n                 ';
                t.querySelector("#clearButton").addEventListener(
                  "click",
                  function () {
                    i.clear();
                  }
                );
                t
                  .querySelector("#submitButton")
                  .addEventListener("click", function () {
                    i.close();
                  }),
                  i.calendarContainer.appendChild(t),
                  (W = !0);
              }
            },
          });
        } else {
          let Y = !1;
          const U = flatpickr("#myDatePicker", {
            showMonths: 1,
            locale: t,
            mode: "range",
            dateFormat: "m.d.y",
            appendTo: document.body,
            onReady: function (t, e, i) {
              i.calendarContainer.parentNode.classList.add("custom-flatpickr");
            },
            onOpen: function (t, e, i) {
              i.calendarContainer;
              if (
                (document.addEventListener("scroll", function t() {
                  U.close(), document.removeEventListener("scroll", t);
                }),
                !Y)
              ) {
                const t = document.createElement("div");
                t.innerHTML =
                  '\n                   <button id="clearButton">Clear</button>\n                   <button id="submitButton" class="btn-gold">Wybierz</button>\n                 ';
                t.querySelector("#clearButton").addEventListener(
                  "click",
                  function () {
                    i.clear();
                  }
                );
                t
                  .querySelector("#submitButton")
                  .addEventListener("click", function () {
                    i.close();
                  }),
                  i.calendarContainer.appendChild(t),
                  (Y = !0);
              }
            },
          });
        }
      }
      if (null !== document.querySelector("#myDatePicker2")) {
        if (window.innerWidth > 768) {
          let X = !1;
          const K = flatpickr("#myDatePicker2", {
            showMonths: 2,
            locale: t,
            mode: "range",
            dateFormat: "m.d.y",
            appendTo: document.body,
            onReady: function (t, e, i) {
              i.calendarContainer.parentNode.classList.add("custom-flatpickr");
            },
            onOpen: function (t, e, i) {
              if (
                ((i.calendarContainer.style.width = "655px"),
                document.addEventListener("scroll", function t() {
                  K.close(), document.removeEventListener("scroll", t);
                }),
                !X)
              ) {
                const t = document.createElement("div");
                t.innerHTML =
                  '\n                   <button id="clearButton">Clear</button>\n                   <button id="submitButton" class="btn-gold">Wybierz</button>\n                 ';
                t.querySelector("#clearButton").addEventListener(
                  "click",
                  function () {
                    i.clear();
                  }
                );
                t
                  .querySelector("#submitButton")
                  .addEventListener("click", function () {
                    i.close();
                  }),
                  i.calendarContainer.appendChild(t),
                  (X = !0);
              }
            },
          });
        } else {
          let Z = !1;
          const J = flatpickr("#myDatePicker", {
            locale: t,
            showMonths: 1,
            mode: "range",
            dateFormat: "m.d.y",
            appendTo: document.body,
            onReady: function (t, e, i) {
              i.calendarContainer.parentNode.classList.add("custom-flatpickr");
            },
            onOpen: function (t, e, i) {
              i.calendarContainer;
              if (
                (document.addEventListener("scroll", function t() {
                  J.close(), document.removeEventListener("scroll", t);
                }),
                !Z)
              ) {
                const t = document.createElement("div");
                t.innerHTML =
                  '\n                   <button id="clearButton">Clear</button>\n                   <button id="submitButton" class="btn-gold">Wybierz</button>\n                 ';
                t.querySelector("#clearButton").addEventListener(
                  "click",
                  function () {
                    i.clear();
                  }
                );
                t
                  .querySelector("#submitButton")
                  .addEventListener("click", function () {
                    i.close();
                  }),
                  i.calendarContainer.appendChild(t),
                  (Z = !0);
              }
            },
          });
        }
      }
      if (null !== document.querySelector(".filters-popup") && e < 768) {
        const Q = document.querySelectorAll(".filter-btn-active"),
          tt = document.querySelectorAll(".filters-popup"),
          et = document.querySelectorAll(".close-popup2"),
          it = document.body;
        Q.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              Q.forEach((e, i) => {
                e.classList.toggle("active", i === t);
              }),
              tt.forEach((e, i) => {
                e.classList.toggle("active", i === t);
              }),
              tt.forEach((t) => {
                t.classList.contains("active") || (it.style.overflow = "auto");
              }),
              void tt.forEach((t) => {
                t.classList.contains("active") &&
                  (it.style.overflow = "hidden");
              })
            );
            var t;
          });
        }),
          et.forEach((t, e) => {
            t.addEventListener("click", () => {
              return (
                (t = e),
                tt.forEach((e, i) => {
                  e.classList.remove("active", i === t);
                }),
                void tt.forEach((t) => {
                  t.classList.contains("active") ||
                    (it.style.overflow = "auto");
                })
              );
              var t;
            });
          });
      }
      if (null !== document.querySelector(".btn-filters1") && e > 768) {
        const st = document.querySelectorAll(".btn-filters1"),
          nt = document.querySelectorAll(".filters-popup"),
          ot = document.querySelectorAll(".close-popup2"),
          rt = document.body;
        st.forEach((t, e) => {
          t.addEventListener("click", () => {
            return (
              (t = e),
              st.forEach((e, i) => {
                e.classList.toggle("active", i === t);
              }),
              nt.forEach((t, e) => {
                t.classList.toggle("active");
              }),
              nt.forEach((t) => {
                t.classList.contains("active") || (rt.style.overflow = "auto");
              }),
              void nt.forEach((t) => {
                t.classList.contains("active") &&
                  (rt.style.overflow = "hidden");
              })
            );
            var t;
          });
        }),
          ot.forEach((t, e) => {
            t.addEventListener("click", () => {
              return (
                (t = e),
                nt.forEach((e, i) => {
                  e.classList.remove("active", i === t);
                }),
                st.forEach((e, i) => {
                  e.classList.remove("active", i === t);
                }),
                void nt.forEach((t) => {
                  t.classList.contains("active") ||
                    (rt.style.overflow = "auto");
                })
              );
              var t;
            });
          });
      }
      if (null !== document.querySelector(".filter-btn-people")) {
        const lt = document.querySelector(".header"),
          at = lt.querySelectorAll(".btn-add"),
          ct = lt.querySelectorAll(".btn-min"),
          dt = lt.querySelectorAll(".ci-number"),
          ut = lt.querySelector(".filter-btn-people");
        function ht(t) {
          let e = 0;
          dt.forEach((t) => {
            const i = parseFloat(t.value);
            isNaN(i) || (e += i);
          }),
            (ut.textContent = `Ilość osób -\n\n         ${e}`);
        }
        at.forEach((t, e) => {
          t.addEventListener("click", () => ht());
        }),
          ct.forEach((t, e) => {
            t.addEventListener("click", () => ht());
          });
      }
      if (null !== document.querySelector(".btn-os")) {
        const gt = document.querySelector(".objects2_main"),
          mt = gt.querySelector(".btn-os"),
          pt = gt.querySelectorAll(".btn-add"),
          ft = gt.querySelectorAll(".btn-min"),
          vt = gt.querySelectorAll(".ci-number");
        function yt(t) {
          let e = 0;
          vt.forEach((t) => {
            const i = parseFloat(t.value);
            isNaN(i) || (e += i);
          }),
            (mt.textContent = `Ilość osób1 -\n   \n         ${e}`);
        }
        pt.forEach((t, e) => {
          t.addEventListener("click", () => yt());
        }),
          ft.forEach((t, e) => {
            t.addEventListener("click", () => yt());
          });
      }
    }),
    (function () {
      F = !0;
      const t = document.querySelector("header.header"),
        e = t.hasAttribute("data-scroll-show"),
        i = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
        s = t.dataset.scroll ? t.dataset.scroll : 1;
      let n,
        o = 0;
      document.addEventListener("windowScroll", function (r) {
        const l = window.scrollY;
        clearTimeout(n),
          l >= s
            ? (!t.classList.contains("_header-scroll") &&
                t.classList.add("_header-scroll"),
              e &&
                (l > o
                  ? t.classList.contains("_header-show") &&
                    t.classList.remove("_header-show")
                  : !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show"),
                (n = setTimeout(() => {
                  !t.classList.contains("_header-show") &&
                    t.classList.add("_header-show");
                }, i))))
            : (t.classList.contains("_header-scroll") &&
                t.classList.remove("_header-scroll"),
              e &&
                t.classList.contains("_header-show") &&
                t.classList.remove("_header-show")),
          (o = l <= 0 ? 0 : l);
      });
    })();
})();
