// declaring the global typescript type for qiankun setup
interface Window {
 __POWERED_BY_QIANKUN__?: boolean;
 __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
 'micro-app'?: {
   bootstrap: () => Promise<void>;
   mount: (props: any) => Promise<void>;
   unmount: () => Promise<void>;
 };
}
