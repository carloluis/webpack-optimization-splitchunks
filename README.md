# webpack-optimization-splitchunks

> This playground project is based on [webpack-splitchunks-playground](https://github.com/carloluis/webpack-splitchunks-playground)

Webpack-4 `optimization.splitChunks` playground...

## Related info

* [webpack 4: Code Splitting, chunk graph and the splitChunks optimization](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)
* [RIP CommonsChunkPlugin](https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693)
	> webpack 4 removes the `CommonsChunkPlugin` in favor of two new options (`optimization.splitChunks` and `optimization.runtimeChunk`)
* [webpack-demo](https://github.com/carloluis/webpack-demo)

<details>
Check more info/stats on this [PR](https://github.com/lencioni/webpack-splitchunks-playground/pull/1)
</details>

## Tests

### Project code structure:

```
src
├── bundles
│   ├── a.js
│   ├── b.js
│   ├── core-a.js
│   └── core-b.js
├── core-module-a.js
├── core-module-b.js
├── non-core-module-a.js
└── non-core-module-b.js
```

#### Minimum Config

> Using `webpack.config.entry.js` to specify entypoints

```
Hash: 09cb46e3e80b0d3d7bba
Version: webpack 4.1.1
Time: 98ms
Built at: 3/11/2018 11:44:49 PM
          Asset      Size  Chunks             Chunk Names
coreA.bundle.js  3.62 KiB       0  [emitted]  coreA
coreB.bundle.js  3.64 KiB       1  [emitted]  coreB
    a.bundle.js  4.33 KiB       2  [emitted]  a
    b.bundle.js  4.35 KiB       3  [emitted]  b
Entrypoint coreA = coreA.bundle.js
Entrypoint coreB = coreB.bundle.js
Entrypoint a = a.bundle.js
Entrypoint b = b.bundle.js
```

#### Split Chunks optimization

> Using `webpack.config.js` (configure `optimization` property)

```
Hash: 01d77365c8faf3592a82
Version: webpack 4.1.1
Time: 104ms
Built at: 3/12/2018 12:10:52 AM
              Asset       Size  Chunks             Chunk Names
    coreA.bundle.js   5.67 KiB       0  [emitted]  coreA
    coreB.bundle.js   5.67 KiB       1  [emitted]  coreB
        a.bundle.js   6.28 KiB       2  [emitted]  a
        b.bundle.js   6.28 KiB       3  [emitted]  b
  vendors.bundle.js  418 bytes       4  [emitted]  vendors
a~b~coreA.bundle.js  163 bytes       5  [emitted]  a~b~coreA
a~b~coreB.bundle.js  163 bytes       6  [emitted]  a~b~coreB
Entrypoint coreA = vendors.bundle.js a~b~coreA.bundle.js coreA.bundle.js
Entrypoint coreB = vendors.bundle.js a~b~coreB.bundle.js coreB.bundle.js
Entrypoint a = vendors.bundle.js a~b~coreA.bundle.js a~b~coreB.bundle.js a.bundle.js
Entrypoint b = vendors.bundle.js a~b~coreA.bundle.js a~b~coreB.bundle.js b.bundle.js
````
