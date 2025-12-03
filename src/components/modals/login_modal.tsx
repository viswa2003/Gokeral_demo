import React, { useEffect, useState } from "react";

type LoginModalProps = {
    isOpen: boolean;
    onClose?: () => void;
    onSignup?: () => void;
    onLogin?: (payload: { email: string; password: string; role: "user" | "driver" }) => void;
};

export default function LoginModal({ isOpen, onClose, onSignup, onLogin }: LoginModalProps) {
    const [role, setRole] = useState<"user" | "driver">("user");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (!isOpen) {
            // reset fields when closed
            setEmail("");
            setPassword("");
            setRole("user");
        }
    }, [isOpen]);

    useEffect(() => {
        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") onClose?.();
        }
        if (isOpen) window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    function handleLogin(e?: React.FormEvent) {
        e?.preventDefault();
        if (!email || !password) return;
        onLogin?.({ email, password, role });
    }

    return (
        <div className="modal-overlay" onMouseDown={onClose} role="dialog" aria-modal="true">
            <div className="modal-panel" onMouseDown={(e) => e.stopPropagation()}>
                <div className="modal-top">
                    <div className="modal-title">Login</div>

                    <div className="role-toggle" aria-hidden>
                        <div
                            className={`role-option ${role === "user" ? "active" : ""}`}
                            onClick={() => setRole("user")}
                        >
                            User
                        </div>
                        <div
                            className={`role-option ${role === "driver" ? "active" : ""}`}
                            onClick={() => setRole("driver")}
                        >
                            Driver
                        </div>
                    </div>
                </div>

                <form className="modal-body" onSubmit={handleLogin}>
                    <input
                        className="modal-input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        className="modal-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit" className="modal-button" onClick={handleLogin}>
                        Login
                    </button>

                    <div
                        className="signup-link"
                        tabIndex={0}
                        role="button"
                        onClick={() => onSignup ? onSignup() : console.log("Signup clicked (implement navigation)")}
                        onKeyDown={(e) => { if (e.key === "Enter") (onSignup ? onSignup() : console.log("Signup clicked")); }}
                    >
                        Don't have an account? Sign up
                    </div>
                </form>
            </div>
        </div>
    );
}
