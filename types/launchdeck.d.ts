// Nuxt 会自动扫描 types/ 目录下的 .d.ts 文件并使其成为全局类型
// 你可能需要在 tsconfig.json 中确保 "types" 或 "typeRoots" 配置正确，但通常 Nuxt 会处理好

declare global {
  // 定义可选的仪表盘样式
  type DashboardStyle = 'SpaceXFalcon9' | 'SpaceLen1'

  interface MultilingualName {
    en: string
    zh: string
    [key: string]: string // Allow other languages if needed
  }

  interface MissionEvent {
    time: number
    eventNameKey: string // Now a key for i18n
    payload?: Record<string, any>
  }

  interface VideoConfig {
    type: 'local' | 'live'
    source: string
    startTimeOffset?: number // 对于本地视频，相对于 T-0 的偏移 (秒)
    liveStreamStartTime?: string // 对于直播流，预期的真实开始时间 (ISO string，未来)
  }

  interface MissionSequenceFile {
    missionName: MultilingualName
    vehicle: MultilingualName
    videoConfig?: VideoConfig // 可选的视频配置
    events: MissionEvent[]
  }

  // 用于 BroadcastChannel 和 Pinia Store 的核心遥测数据结构
  interface TelemetryData {
    simulationTime: number
    altitude: number
    speed: number
    currentEventNameKey: string | null
    currentEventPayload?: Record<string, any> | null
    isPlaying: boolean
    selectedDashboardStyle: DashboardStyle
    allEvents: MissionEvent[]
    missionName: string // 通常是已翻译的
    vehicleName: string // 通常是已翻译的
    videoConfig?: VideoConfig
    syncVideoToTime?: number
  }
}

export {}
