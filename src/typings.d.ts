/* SystemJS module definition */

declare var module: NodeModule;
declare var require : NodeRequire;
interface NodeModule {
  id: string;
}

interface AppRequire {
  <T>(path: string): T | any;
  (paths: string[], 
    callback: (...modules: any[]) => void): void | any;
  ensure: (
    paths: string[], 
    callback: (require: <T>(path: string) => T) => void, name?: string) => void | any;
  context: any;
}
interface NodeRequire extends AppRequire  {

}

