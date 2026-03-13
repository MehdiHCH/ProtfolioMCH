import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const FutsalAnalysisDemos = () => {
  return (
    <div className="min-h-screen overflow-hidden pt-32 pb-20">
      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link
          to="/projects/1-futsal-analysis-sportscore"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg glass hover:bg-primary/10 hover:text-primary transition-all mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Project Details
        </Link>

        {/* Header */}
        <div className="max-w-4xl space-y-6 mb-16">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-foreground">
            ⚽ Automated Futsal Video Analysis
          </h1>
          <p className="text-xl text-muted-foreground">
            for Performance Reporting
          </p>
          <p className="text-lg text-muted-foreground">
            Discover the complete AI pipeline for automated futsal match analysis.
            From frame classification to action detection and goal recognition,
            explore how YOLOv11 and DeepSORT transform raw video into actionable
            tactical insights.
          </p>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            <div className="glass p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary mb-2">99.95%</p>
              <p className="text-sm text-muted-foreground">Frame Accuracy</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary mb-2">90.1%</p>
              <p className="text-sm text-muted-foreground">Ball Detection</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary mb-2">80%</p>
              <p className="text-sm text-muted-foreground">Time Saved</p>
            </div>
            <div className="glass p-6 rounded-xl text-center">
              <p className="text-3xl font-bold text-primary mb-2">7+</p>
              <p className="text-sm text-muted-foreground">Action Types</p>
            </div>
          </div>
        </div>

        {/* Module 1: Frame Classification */}
        <div className="mb-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Module 1: Frame Classification
            </h2>
            <p className="text-lg text-muted-foreground">
              Complete automated analysis of a futsal match using YOLOv11m-cls
              to filter relevant gameplay frames and discard replays,
              transitions, and non-gameplay sequences. This intelligent filtering
              reduces processing time by 20% while maintaining 99.95% accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Metrics */}
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase mb-2">
                    Accuracy ✅
                  </p>
                  <p className="text-3xl font-bold mb-1">99.95%</p>
                  <p className="text-sm text-muted-foreground">
                    False Positives: Only 6 errors
                  </p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase mb-2">
                    Processing Improvement ⚡
                  </p>
                  <p className="text-3xl font-bold mb-1">20% Faster</p>
                  <p className="text-sm text-muted-foreground">
                    Intelligent frame filtering
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="glass p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold">🔧 Technical Details</h3>
              <div className="space-y-4">
                <div className="border-b border-border/50 pb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Training Data
                  </p>
                  <p className="text-lg font-semibold">67,801 frames</p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Inference Speed
                  </p>
                  <p className="text-lg font-semibold">Real-time (30 FPS)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Model</p>
                  <p className="text-lg font-semibold">🤖 YOLOv11m-cls</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 2: Action Detection */}
        <div className="mb-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Module 2-6: Action Detection & Classification
            </h2>
            <p className="text-lg text-muted-foreground">
              Real-time detection and classification of player actions including
              7 types of passes (Basic, Progressive, Into-Penalty-Area, Pressure,
              Smart, Key, Assist), shots, dribbles, and interceptions. The system
              uses DeepSORT tracking to maintain player identity and
              spatio-temporal rules for accurate action attribution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Metrics */}
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase mb-2">
                    Actions Detected 🎯
                  </p>
                  <p className="text-3xl font-bold">11 Types</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase mb-2">
                    Tracking Algorithm 🔄
                  </p>
                  <p className="text-3xl font-bold">DeepSORT</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase mb-2">
                    Real-time Processing ✅
                  </p>
                  <p className="text-xl font-bold">Yes</p>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="glass p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold">🔧 Technical Details</h3>
              <div className="space-y-4">
                <div className="border-b border-border/50 pb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Player Re-ID
                  </p>
                  <p className="text-lg font-semibold">HSV + OCR + Trajectory</p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Pose Estimation
                  </p>
                  <p className="text-lg font-semibold">17 Keypoints</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Spatial Projection
                  </p>
                  <p className="text-lg font-semibold">Homography-based</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Module 3: Object Detection & Goal Recognition */}
        <div className="mb-20 space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Module 3: Object Detection & Goal Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Advanced ball detection and goal confirmation using fine-tuned
              YOLOv11x. The system validates goals through homography-based
              spatial projection, ensuring the ball crosses the goal line with
              proper possession tracking. Assists are automatically attributed
              based on preceding key passes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Metrics */}
            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase mb-2">
                    Ball Detection Precision 🎯
                  </p>
                  <p className="text-3xl font-bold">90.1%</p>
                </div>
              </div>

              <div className="glass p-6 rounded-2xl space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold uppercase mb-2">
                    Goal Validation ✅
                  </p>
                  <p className="text-2xl font-bold">Zone-based</p>
                </div>
              </div>
            </div>

            {/* Technical Details */}
            <div className="glass p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-bold">🔧 Technical Details</h3>
              <div className="space-y-4">
                <div className="border-b border-border/50 pb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Training Dataset
                  </p>
                  <p className="text-lg font-semibold">FIFA Futsal Footage</p>
                </div>
                <div className="border-b border-border/50 pb-4">
                  <p className="text-sm text-muted-foreground mb-1">
                    Inference Speed
                  </p>
                  <p className="text-lg font-semibold">9.6 ms/frame (~4.7 FPS)</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Recall</p>
                  <p className="text-lg font-semibold">83.4%</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20 space-y-8">
          <h2 className="text-4xl font-bold">Technology Stack</h2>
          <div className="glass p-8 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Python",
                "PyTorch",
                "YOLOv11",
                "DeepSORT",
                "OpenCV",
                "CUDA",
                "TensorRT",
                "Pandas",
              ].map((tech) => (
                <div key={tech} className="p-4 bg-surface rounded-lg text-center">
                  <p className="font-semibold">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-12">
          <Link
            to="/projects/1-futsal-analysis-sportscore"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg glass hover:bg-primary/20 hover:text-primary transition-all font-semibold"
          >
            View Full Project Details
          </Link>
        </div>
      </div>
    </div>
  );
};
