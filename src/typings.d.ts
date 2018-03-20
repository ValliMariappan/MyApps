/* SystemJS module definition */
declare var require : NodeRequire;

interface AppRequire {
  <T>(path: string): T | any;
  (paths: string[], callback: (...modules: any[]) => void): void | any;
  ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void, chunkName?: string) => void | any;
  context: any;
}
interface NodeRequire extends AppRequire  {

}

