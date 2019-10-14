
# Configuration

By default the Participatory Planning app takes the configuration from [`settings.json`](./assets/js/settings.json). You can override that by providing your own setting file as a query parameter:

`https://esri.github.io/participatory-planning?settings=[url]`

The settings parameter is expected to be a URL pointing to JSON file with the following structure:

```json
{
  "planningArea": [
    [-8568646.630983, 4706100.854797],
    [-8568391.100654, 4706063.014176],
    [-8568293.809529, 4705888.642205],
    [-8568379.106050, 4705757.266063],
    [-8568481.445079, 4705670.080078],
    [-8568629.089282, 4705702.714173],
    [-8568661.676724, 4705855.201005],
    [-8568658.947497, 4706064.945629],
    [-8568646.630983, 4706100.854797],


  ],
  "planningAreaName": "Dumbo, Brooklyn NY",
  "webSceneId": "e6aeef9b64fd426689937a8e6ed96342"
}
```

1. `planningArea` contains the Web Mercator coordinates of the planning area
2. `planningAreaName` is the name of the area shown in the welcome screen of the app
3. `webSceneId` must point to a [Webscene](https://doc.arcgis.com/en/arcgis-online/reference/what-is-web-scene.htm), you can follow these steps to create your own:
    1.  Create a [Webscene in ArcGIS Online](https://doc.arcgis.com/en/arcgis-online/get-started/get-started-with-scenes.htm)
    2.  Add a [SceneLayer](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-SceneLayer.html) with existing buildings in and around planning area.
    3.  Capture a few slides with different perspectives of the planning area, they will show up at the upper navigation menu in the app

A simple way of providing your own settings file is using [GitHub Gist](https://gist.github.com/) and passing the Gist's URL (raw version) to the app. This is an example for a planning area in Zug, Switzerland:

[`https://esri.github.io/participatory-planning?settings=https://gist.githubusercontent.com/arnofiva/82f57a3cc2d99769f573898560f74e3f/raw/zug.pp.json`](https://esri.github.io/participatory-planning?settings=https://gist.githubusercontent.com/arnofiva/82f57a3cc2d99769f573898560f74e3f/raw/zug.pp.json)

## GitHub Deployment

The live version is deployed using GitHub pages. The `gh-pages` branch represents a separate `git worktree` directly pointing to the contents of the `dist/` build output folder. The following commands update the `gh-pages` branch to the latest source code version:

```
git clone https://github.com/Esri/participatory-planning.git -b gh-pages dist
npm run build
cd dist/
git add .
git commit -am 'Deploy latest version from master branch'
git push
```
Usually the changes become available shortly after at
[https://esri.github.io/participatory-planning](https://esri.github.io/participatory-planning). For more details check out the following [tutorial](https://medium.com/linagora-engineering/deploying-your-js-app-to-github-pages-the-easy-way-or-not-1ef8c48424b7).